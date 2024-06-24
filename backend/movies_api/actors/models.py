from django.db import models

# Create your models here.
class Actor(models.Model):
    name=models.CharField(max_length=255)
    nationality=models.CharField(max_length=255)
    birth_date=models.DateField()

    def __str__(self):
        return self.name