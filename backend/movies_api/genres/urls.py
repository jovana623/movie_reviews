from django.urls import path
from .views import GenreListAPIView,CreateGenreAPIView,GenreRetrieveUpdateDestroyAPIView


urlpatterns = [
    path("",GenreListAPIView.as_view(),name='genre-list'),
    path("create/",CreateGenreAPIView.as_view(),name='genre-create'),
    path("<int:pk>",GenreRetrieveUpdateDestroyAPIView.as_view(),name='genre-details')
]


