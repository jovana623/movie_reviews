from django.db import models

# Create your models here.

class Director(models.Model):
    name=models.CharField(max_length=255)
    birth_date=models.DateField()
    nationality=models.CharField(max_length=255,null=True,blank=True)

    def __str__(self):
        return self.name