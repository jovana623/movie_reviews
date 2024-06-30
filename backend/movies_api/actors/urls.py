from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import ActorListCreateAPIView,ActorRetrieveUpdateDestroyAPIView


urlpatterns = [
    path("",ActorListCreateAPIView.as_view(),name='actor-list'),
    path("<int:pk>",ActorRetrieveUpdateDestroyAPIView.as_view(),name='actor-details')
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)