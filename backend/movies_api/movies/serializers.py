from rest_framework import serializers
from genres.serializers import GenreSerializer
from directors.serializers import DirectorSerializer
from actors.serializers import ActorSerializer
from .models import Movie
from genres.models import Genre
from directors.models import Director
from actors.models import Actor


class MovieSerializer(serializers.ModelSerializer):
    genres=GenreSerializer(many=True,read_only=True)
    genre_ids=serializers.PrimaryKeyRelatedField(queryset=Genre.objects.all(),many=True,write_only=True)
    director=DirectorSerializer(read_only=True)
    director_id = serializers.PrimaryKeyRelatedField(queryset=Director.objects.all(), write_only=True, required=False)
    actors=ActorSerializer(many=True,read_only=True)
    actor_ids=serializers.PrimaryKeyRelatedField(queryset=Actor.objects.all(),many=True,write_only=True)

    class Meta:
        model=Movie
        fields=['id','title','description','release_date','length','genres','genre_ids','director','director_id','actors','actor_ids']

    def create(self, validated_data):
        genre_ids=validated_data.pop('genre_ids')
        director_id = validated_data.pop('director_id').id
        actor_ids=validated_data.pop('actor_ids')
        movie=Movie.objects.create(director_id=director_id,**validated_data)
        movie.genres.set(genre_ids)
        movie.actors.set(actor_ids)
        return movie
    
    def update(self, instance, validated_data):
        genre_ids=validated_data.pop('genre_ids',None)
        director_id=validated_data.pop('director_id',None)
        actor_ids=validated_data.pop('actor_id',None)

        for attr,value in validated_data.items():
            setattr(instance,attr,value)

        if genre_ids is not None:
            instance.genres.set(genre_ids)

        if director_id is not None:
            director = Director.objects.get(id=director_id.id)
            instance.director = director

        if actor_ids is not None:
            instance.actors.set(actor_ids)

        instance.save()
        return instance