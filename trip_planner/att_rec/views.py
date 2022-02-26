from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializers import *
import json
import pickle
import pandas as pd
import re
import sys
from .attractions_recc import *
from .get_recc import *

getRecObj = getRecom()

class attractionRecommendation(APIView):

    serializer_class = AttractionReccSerializer

    def post(self, request):
  
        serializer = AttractionReccSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):

            
            print(serializer.data)

            #--------------------------------------------------------------------------------
            ruName = serializer.data['uName']

            rdestinationCity = serializer.data['destinationCity']
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
            rcat5Rating = serializer.data['cat5Rating']

            #--------------------------------------------------------------------------------

            print("\nData from model training: \n")
            getRecObj.dataRecomOutput1 = getRecObj.attractionReco(ruName,rdestinationCity,rminBudget,rmaxBudget,rstartDate,rendDate,rcategory1,rcat1Rating,rcategory2,rcat2Rating,rcategory3,rcat3Rating,rcategory4,rcat4Rating,rcategory5,rcat5Rating)
            
            #send jso data o frontend
            return Response(getRecObj.dataRecomOutput1)
        
        return Response("Data Not Received")

    def get(self, request):
        #x = self.dataRecomOutput1
        #print("\n\n\t Received data from variable")
        #print(x)
        #recomOutput = [x]
        #recomOutput = json.dumps(recomOutput, indent=4)
        recomOutput={}
        recomOutput = getRecObj.dataRecomOutput1
        recomOutput = json.loads(recomOutput)
        print("\n\n print fron get request \n\n")
        print(recomOutput)
        convertedData = []
        tempDict = {}

        l1=[]
        l2=[]
        l1 = [(k) for k in recomOutput.keys()]
        
        print(l1)
        l2 = recomOutput[l1[0]]


        for i in range(len(l2)):
            for j in range(len(l1)):
                x = recomOutput[l1[j]]
                tempDict[l1[j]] = x[i]
            convertedData.append(tempDict)
            tempDict = {}
            
        
        convertedData = json.dumps(convertedData)

        getRecObj.dataRecomOutput2 = convertedData
        
        #res1= pickle.dumps(convertedData)
        #res1= json.dumps(convertedData)
        
        #getRecObj.dataRecomOutput2 = pickle.loads(res1)
        res2 = json.loads(convertedData)
        print("\n\n print object from data \n\n")
        print(getRecObj.dataRecomOutput2)
        return Response(res2)

# create a object
class Sample(APIView):
    serializer_class = sampleSerializer
  
    def get(self, request):
        data1 =[ 
            {
                "username":"Sagar",
                "name":"Sagar Patil",
                "email":"abc@gmail.com"
            },
            {
                "username":"Sagar",
                "name":"Sagar Patil",
                "email":"abc@gmail.com"
            }
        
        ]
        '''data1 = {
            "items":[  
                {  
                    "username":"Sagar",
                    "name":"Sagar Patil",
                    "email":"abc@gmail.com"
                    
                },
                {  
                    "username":"Netraj",
                    "name":"Netraj Patil",
                    "email":"xyz@gmail.com"
                    
                }
                
            ]
        }'''
        '''
        data1 = {
            "items":[  
                {  
                    "username":"Sagar",
                    "name":"Sagar Patil",
                    "email":"abc@gmail.com"
                    
                },
                {  
                    "username":"Sagar",
                    "name":"Sagar Patil",
                    "email":"abc@gmail.com"
                    
                }
                
            ]
        }
        '''
        
        # Serializing json

        #res1 = json.dumps( data1 )
        #print(res1)
        ##dat = sampleSerializer('json',res1)
        ##print(dat)
        res1= pickle.dumps(data1)
        #print(res1)
        res2 = pickle.loads(res1)
        print(res2)
        return Response(res2)
  
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
            #print(serializer.data['userName']+" age is : "+serializer.data['age'])
            print(serializer.data)
            return  Response(res1)
        return Response("Data Not Received")