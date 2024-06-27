from django.shortcuts import render
from .models import Movie
from .serializers import MovieSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class MovieListAPIView(generics.ListAPIView):
    serializer_class=MovieSerializer

    def get_queryset(self):
        genre_id=self.request.query_params.get('genre_id')
        if genre_id:
            return Movie.objects.filter(genres__id=genre_id)
        return Movie.objects.all()


class CreateMovieAPIView(generics.CreateAPIView):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer


class MovieRetrieveUpdateDestoyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer


    