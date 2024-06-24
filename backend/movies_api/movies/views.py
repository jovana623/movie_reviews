from django.shortcuts import render
from .models import Movie
from .serializers import MovieSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class MovieListAPIView(generics.ListAPIView):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer


class CreateMovieAPIView(generics.CreateAPIView):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer

class MovieRetrieveUpdateDestoyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer