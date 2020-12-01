from django.urls import path, include 
from . import views
from rest_framework import routers 
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = [
    path('', include(router.urls)),
]

