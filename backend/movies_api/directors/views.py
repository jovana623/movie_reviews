from rest_framework import generics
from .models import Director
from .serializers import DirectorSerializer


# Create your views here.
class DirectorListCreateAPIView(generics.ListCreateAPIView):
    queryset=Director.objects.all()
    serializer_class=DirectorSerializer

class RetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Director.objects.all()
    serializer_class=DirectorSerializer