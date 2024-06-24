from django.urls import path
from .views import DirectorListCreateAPIView,RetrieveUpdateDestroyAPIView


urlpatterns = [
    path("",DirectorListCreateAPIView.as_view(),name='directors-list'),
    path("<int:pk>",RetrieveUpdateDestroyAPIView.as_view(),name='director-details')
]
