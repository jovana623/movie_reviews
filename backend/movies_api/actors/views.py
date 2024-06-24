from rest_framework import generics
from .models import Actor
from .serializers import ActorSerializer


# Create your views here.

class ActorListCreateAPIView(generics.ListCreateAPIView):
    queryset=Actor.objects.all()
    serializer_class=ActorSerializer


class ActorRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Actor.objects.all()
    serializer_class=ActorSerializer