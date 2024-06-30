from rest_framework import generics
from .models import Actor
from .serializers import ActorSerializer
from rest_framework.parsers import MultiPartParser,FormParser


# Create your views here.

class ActorListCreateAPIView(generics.ListCreateAPIView):
    queryset=Actor.objects.all()
    serializer_class=ActorSerializer
    parser_classes=(MultiPartParser,FormParser)


class ActorRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Actor.objects.all()
    serializer_class=ActorSerializer 