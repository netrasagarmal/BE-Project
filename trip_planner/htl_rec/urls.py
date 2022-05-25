from django.urls import path
from .views import *

urlpatterns = [
    #path('sample/', Sample.as_view(), name="something"),
    path('htlrec/', hotelRecommendation.as_view(), name="hotel_recommendation"),
    path('restrec/', restaurantRecommendation.as_view(), name="restaurant_recommendation"),
    
]