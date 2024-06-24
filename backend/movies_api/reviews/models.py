from django.db import models
from movies.models import Movie
from users.models import User
from django.core.validators import MinValueValidator,MaxValueValidator

# Create your models here.
class Review(models.Model):
    user=models.ForeignKey(User,related_name='review',on_delete=models.CASCADE,default=1)
    movie=models.ForeignKey(Movie,related_name='review',on_delete=models.CASCADE)
    review_text=models.TextField()
    rating=models.IntegerField(validators=[MinValueValidator(0),MaxValueValidator(10)])
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)