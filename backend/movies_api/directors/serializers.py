from rest_framework import serializers
from .models import Director


class DirectorSerializer(serializers.ModelSerializer):

    class Meta:
        model=Director
        fields=['id','name','nationality','birth_date']