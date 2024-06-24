from rest_framework import generics
from .models import Genre
from .serializers import GenreSerializer


# Create your views here.
class GenreListAPIView(generics.ListAPIView):
    queryset=Genre.objects.all()
    serializer_class=GenreSerializer
    

class CreateGenreAPIView(generics.CreateAPIView):
    queryset=Genre.objects.all()
    serializer_class=GenreSerializer


class GenreRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Genre.objects.all()
    serializer_class=GenreSerializer