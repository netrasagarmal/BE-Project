from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializers import *
import json
import pickle
import pandas as pd
from . get_htl_rec import *


getRecObj = getRecom()

class hotelRecommendation(APIView):
    serializer_class = HotelReccSerializer

    def post(self, request):
  
        serializer = HotelReccSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            city = serializer.data['cty']
            a = getRecObj.hotelRecommendation(city)
            getRecObj.dataRecomOutput1 = a
            a = json.dumps(a)
            a = json.loads(a)
            return Response(a)
        
        return Response("Data Not Received")

    def get(self, request):
        a = getRecObj.dataRecomOutput1
        a = json.dumps(a)
        a = json.loads(a)
        return Response(a)

class restaurantRecommendation(APIView):

    def get(self, request):
        data1 =[ 
            {
                "restaurant_name":"Lakeside Restaurant",
                "starRating":"4.5",
                "cuisines":"Mexican, Italian, French",
                "averagecostfor2people":"$ 5",
                "location":"6270 Lakeside Rd, Ontario, NY 14519, Canada",
            },
            {
                "restaurant_name":"New Orleans Seafood & Steakhouse",
                "starRating":"4",
                "cuisines":"Mexican, Indian",
                "averagecostfor2people":"$ 4",
                "location":"267 Scarlett Rd, York, ON M6N 4K9, Canada",
            }
        
        ]
        res1= pickle.dumps(data1)
        #print(res1)
        res2 = pickle.loads(res1)
        print(res2)
        return Response(res2)