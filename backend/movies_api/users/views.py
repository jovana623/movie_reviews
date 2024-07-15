from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny,IsAuthenticated
from .serializers import UserSerializer

# Create your views here.

class RegisterUser(APIView):
    permission_classes=[AllowAny]

    def post(self,request):
        serializer=UserSerializer(data=request.data)

        if serializer.is_valid():
            user=serializer.save()
            return Response({'message':'User created'},status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class CurrentUserView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request):
        user=request.user
        serializer=UserSerializer(user)
        return Response(serializer.data)