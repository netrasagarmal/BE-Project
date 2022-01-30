from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializers import *
import json
import pickle
#from attractions_recc import *
import pandas as pd
import re
import sys
  
# adding Folder_2 to the system path
#sys.path.insert(0,'/ITRS')
from .attractions_recc import *

# Create your views here.

#serializer_class = AttractionReccSerializer

class attractionRecommendation(APIView):

    serializer_class = AttractionReccSerializer

    def attractionReco(self):
        print("\n\nattrec 1----------------------------------------------------------------")
        att_df = pd.read_json('G:/ITRS/etl/attractions.json',orient='records')

        print("\n\nattrec 2-----------------------------------------------------------")

        uname = 'Sagar Patl'
        place = 'Ontario'
        budget = (5,900)
        start = '2022-01-25'
        end = '2022-01-28'

        print("\n\nattrec 3-----------------------------------------------------------------------")

        print(uname)
        print(place)
        print(start)
        print(end)
        print(budget)

        category_df = att_df.groupby('category').size().reset_index().sort_values([0],ascending=False)[:20]
        categories = list(category_df.category.values)
        cat_rat = dict()
        cat_rat = {
            'private_&_custom_tours': 2, 
            'food,_wine_&_nightlife': 4, 
            'tours_&_sightseeing': 5, 
            'family_friendly': 3, 
            'day_trips_&_excursions': 2
        }

        print(categories)
        print(cat_rat)

        user_name = re.sub(' ','_',uname.lower())
        province = re.sub(' ','_',place.lower())
        (low,high) = tuple([float(i) for i in budget])
        begin_date = start
        end_date = end
        cat_rating = dict()
        for key, value in cat_rat.items():
            cat_rating[key] = float(value)

        print(user_name)
        print(province)
        print(begin_date)
        print(end_date)
        print(cat_rating)

        print("attrec 4------------------------------------------------------------------")

        filename, user, rbm_att = get_recc(att_df, cat_rating)

        with_url = filter_df(filename, user, low, high, province, att_df)
        
        #print(filename)
        #print(user)
        #print(rbm_att)
        #print(with_url)

        print("attrec 5------------------------------------------------------------------")

        final = dict()
        final['timeofday'] = []
        final['image'] = []
        final['name'] = []
        final['location'] = []
        final['price'] = []
        final['rating'] = []
        final['category'] = []

        for i in range(1,4):
            for j in range(2):
                final['timeofday'].append('Morning')
            for j in range(2):
                final['timeofday'].append('Evening')

        for i in range(len(final['timeofday'])): 
            if i%4 == 0: 
                final = top_recc(with_url, final)
            else:
                final = find_closest(with_url, final['location'][-1],final['timeofday'][i], final)

        json_object = json.dumps(final, indent = 4) 
        print(json_object)
        
        print("\n\n1")
        return 1

    def post(self, request):
  
        serializer = AttractionReccSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):

            
            print(serializer.data)

            print("\nData from model training: \n")
            x = self.attractionReco()
            if(x==1):
                print("model trained successfull")
            #print(ruName)
            return Response("Data received at backend . . .")
        
        return Response("Data Not Received")

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
        
'''ruName = serializer.data['uName']

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
            rcat5Rating = serializer.data['cat5Rating']'''