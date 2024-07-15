from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from django.urls import path
from .views import RegisterUser,CurrentUserView


urlpatterns = [
    path('token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('token/refresh/',TokenRefreshView.as_view(),name='token_refresh'),
    path('register/',RegisterUser.as_view(),name='register_user'),
    path('current_user/',CurrentUserView.as_view(),name='current_user')
]
