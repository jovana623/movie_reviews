from rest_framework import generics
from .serializers import ReviewSerializer
from .models import Review
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class ReviewListCreateAPIView(generics.ListCreateAPIView):
    queryset=Review.objects.all()
    serializer_class=ReviewSerializer
    permission_classes=[IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ReviewRetrieveUpdateDestoyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Review.objects.all()
    serializer_class=ReviewSerializer
    permission_classes=[IsAuthenticated]