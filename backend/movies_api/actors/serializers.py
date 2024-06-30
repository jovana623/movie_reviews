from rest_framework import serializers
from .models import Actor


class ActorSerializer(serializers.ModelSerializer):
    image=serializers.ImageField(required=False)

    class Meta:
        model=Actor
        fields=['id','name','nationality','birth_date','image'] 