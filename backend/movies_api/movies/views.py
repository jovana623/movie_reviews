from django.shortcuts import render
from .models import Movie
from .serializers import MovieSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser,FormParser

# Create your views here.
class MovieListAPIView(generics.ListAPIView):
    serializer_class=MovieSerializer
    parser_classes=(MultiPartParser,FormParser)

    def get_queryset(self):
        genre_id=self.request.query_params.get('genre_id')
        year=self.request.query_params.get('year',None)
        queryset = Movie.objects.all()
        if genre_id:
            queryset = queryset.filter(genres__id=genre_id)
        if year is not None:
            queryset = queryset.filter(release_date__year=year)
        return queryset
    
    

class CreateMovieAPIView(generics.CreateAPIView):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer


class MovieRetrieveUpdateDestoyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Movie.objects.all()
    serializer_class=MovieSerializer


    