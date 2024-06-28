from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import CreateMovieAPIView,MovieRetrieveUpdateDestoyAPIView,MovieListAPIView


urlpatterns = [
    path("",MovieListAPIView.as_view(),name='movie-list'),
    path('create/',CreateMovieAPIView.as_view(),name='movie-create'),
    path('<int:pk>',MovieRetrieveUpdateDestoyAPIView.as_view(),name='movie-detail'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)