from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializers import *
import json
# Create your views here.

#serializer_class = AttractionReccSerializer

class attractionRecommendation(APIView):

    serializer_class = AttractionReccSerializer
    def post(self, request):
  
        serializer = AttractionReccSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):

            ruName = serializer.data['uName']

            '''rdestinationCity = serializer.data['destinationCity']
            rstartCity = serializer.data['startCity']
            rreturnCity = serializer.data['returnCity']

            rminBudget = serializer.data['minBudget']
            rmaxBudget = serializer.data['maxBudget']

            rstartDate = serializer.data['startDate']
            rendDate = serializer.data['endDate']
            rnoOfDays = serializer.data['noOfDays']

            rcategory1 = serializer.data['category1']
            rcat1Rating = serializer.data['cat1Rating']

            rcategory2 = serializer.data['category2']
            rcat2Rating = serializer.data['cat2Rating']

            rcategory3 = serializer.data['category3']
            rcat3Rating = serializer.data['cat3Rating']

            rcategory4 = serializer.data['category4']
            rcat4Rating = serializer.data['cat4Rating']

            rcategory5 = serializer.data['category5']
            rcat5Rating = serializer.data['cat5Rating']'''
            print(serializer.data)
            print(ruName)
            return Response("Data received at backend . . .")
        
        return Response("Data Not Received")

# create a object
class Sample(APIView):
    serializer_class = sampleSerializer
  
    def get(self, request):
        data1 = {
            "user": {
                "name": "Manoj Patil",
                "age": 21,
                "Place": "Baramati",
                "Blood group": "O-ve"
            }
        }
        
        # Serializing json
        res1 = json.dumps( data1 )
        return Response(res1)
  
    def post(self, request):
  
        serializer = sampleSerializer(data=request.data)
        # Data to be written 
        data1 = {
            "user": {
                "name": "satyam kumar",
                "age": 21,
                "Place": "Patna",
                "Blood group": "O+"
            }
        }
        
        # Serializing json
        res1 = json.dumps( data1 )
        if serializer.is_valid(raise_exception=True):
            print(serializer.data['userName']+" age is : "+serializer.data['age'])
            print(res1)
            return  Response(res1)
        return Response("Data Not Received")
        