from django.db import models
from genres.models import Genre
from directors.models import Director
from actors.models import Actor

# Create your models here.

def upload_to(instance,filename):
    return 'images/{filename}'.format(filename=filename)

class Movie(models.Model):
    title=models.CharField(max_length=255)
    description=models.TextField()
    release_date=models.DateField()
    length=models.IntegerField(default=60)
    genres=models.ManyToManyField(Genre,related_name='movies')
    director=models.ForeignKey(Director,related_name='movies',on_delete=models.CASCADE,default=1)
    actors=models.ManyToManyField(Actor,related_name='movies')
    image=models.ImageField(upload_to=upload_to,null=True,blank=True)

    def __str__(self):
        return self.title
    
    