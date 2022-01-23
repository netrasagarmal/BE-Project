from django.urls import path
from .views import *

urlpatterns = [
    path('sample/', Sample.as_view(), name="something"),
    path('attrec/', attractionRecommendation.as_view(), name="attaraction_recommendation"),
    
]