from django.contrib import admin
from .models import Movie

# Register your models here.

class MovieAdmin(admin.ModelAdmin):
    list_display=('title','description','release_date','length','get_genres','get_director_name','get_actors')
    search_fields=('title','release_date')
    list_filter=('genres','director')


    def get_genres(self,obj):
        return ",".join([genre.name for genre in obj.genres.all()])
    get_genres.short_description='Genres'

    def get_director_name(self,obj):
        return obj.director.name if obj.director else None
    get_director_name.short_description='Director'

    def get_actors(self,obj):
        return ",".join([actor.name for actor in obj.actors.all()])
    get_actors.short_description='Actors'

admin.site.register(Movie,MovieAdmin)