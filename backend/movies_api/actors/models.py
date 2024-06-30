from django.db import models

def upload_to(instance,filename):
    return 'images/{filename}'.format(filename=filename)

# Create your models here.
class Actor(models.Model):
    name=models.CharField(max_length=255)
    nationality=models.CharField(max_length=255)
    birth_date=models.DateField()
    image=models.ImageField(upload_to=upload_to,blank=True,null=True)

    def __str__(self):
        return self.name