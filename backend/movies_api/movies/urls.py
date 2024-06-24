from django.urls import path
from .views import CreateMovieAPIView,MovieRetrieveUpdateDestoyAPIView,MovieListAPIView


urlpatterns = [
    path("",MovieListAPIView.as_view(),name='movie-list'),
    path('create/',CreateMovieAPIView.as_view(),name='movie-create'),
    path('<int:pk>',MovieRetrieveUpdateDestoyAPIView.as_view(),name='movie-detail')
]
