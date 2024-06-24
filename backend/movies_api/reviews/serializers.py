from rest_framework import serializers
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model=Review
        fields=['id','movie','review_text','rating','created_at','updated_at']
        read_only=['created_at','updated_at','user']

    def create(self, validated_data):
        request=self.context.get('request',None)
        if request and hasattr(request,'user'):
            validated_data['user']=request.user
        return super().create(validated_data)