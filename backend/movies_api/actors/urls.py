from django.urls import path
from .views import ActorListCreateAPIView,ActorRetrieveUpdateDestroyAPIView


urlpatterns = [
    path("",ActorListCreateAPIView.as_view(),name='actor-list'),
    path("<int:pk>",ActorRetrieveUpdateDestroyAPIView.as_view(),name='actor-details')
]
