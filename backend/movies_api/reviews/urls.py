from django.urls import path
from .views import ReviewListCreateAPIView,ReviewRetrieveUpdateDestoyAPIView

urlpatterns = [
    path("",ReviewListCreateAPIView.as_view(),name="review-list"),
    path("<int:pk>",ReviewRetrieveUpdateDestoyAPIView.as_view(),name="review-details")
]
