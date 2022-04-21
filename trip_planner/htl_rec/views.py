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