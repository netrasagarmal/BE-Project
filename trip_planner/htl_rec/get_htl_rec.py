import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from keras.models import Sequential
from keras.layers.core import Dense,Activation,Dropout
from keras.layers import LSTM
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import seaborn as sns
from sklearn.ensemble import RandomForestClassifier
from sklearn import svm
from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize 
from xgboost import XGBClassifier
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import accuracy_score
from sklearn.tree import DecisionTreeClassifier
from keras.callbacks import EarlyStopping
import math
import os
import json
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.metrics.pairwise import linear_kernel, cosine_similarity
from nltk.stem.snowball import SnowballStemmer
from nltk.stem.wordnet import WordNetLemmatizer
from nltk.corpus import wordnet
from nltk.stem import WordNetLemmatizer
from math import sin, cos, sqrt, atan2, radians
import requests

class getRecom:
    def __init__(self):
        self.hotel = pd.DataFrame()
        self.hotel_cost = pd.DataFrame()
        self.city = ''
        self.dataRecomOutput1 = {}
        self.lemm = WordNetLemmatizer()
        self.room_no = []
        #self.hname = []
#---------------------------------------------------------------------------------
    def readData(self):
        hotel = pd.read_csv('G:/hrs/dataset/hotel.csv')
        hotel_cost=pd.read_csv('G:/hrs/dataset/hotels_RoomPrice.csv',delimiter=',')
        return hotel, hotel_cost
#---------------------------------------------------------------------------------
    def citybased(self,city):
        self.hotel['city']=self.hotel['city'].str.lower()
        citybase=self.hotel[self.hotel['city']==city.lower()]
        citybase=citybase.sort_values(by='starrating',ascending=False)
        citybase.drop_duplicates(subset='hotelcode',keep='first',inplace=True)
        if(citybase.empty==0):
            hname=citybase[['hotelname','starrating','address','roomamenities','ratedescription']]
            return hname
        else:
            print('No Hotels Available')
#---------------------------------------------------------------------------------
    def calc(self):
        guests_no=[]
        for i in range(self.hotel.shape[0]):
            temp=self.hotel['roomtype'][i].lower().split()
            flag=0
            for j in range(len(temp)):
                for k in range(len(self.room_no)):
                    if temp[j]==self.room_no[k][0]:
                        guests_no.append(self.room_no[k][1])
                        flag=1
                        break
                if flag==1:
                    break
            if flag==0:
                guests_no.append(2)
        self.hotel['guests_no']=guests_no
#---------------------------------------------------------------------------------
    def pop_citybased(self,city,number):
        self.hotel['city']=self.hotel['city'].str.lower()
        popbased=self.hotel[self.hotel['city']==city.lower()]
        popbased=popbased[popbased['guests_no']==number].sort_values(by='starrating',ascending=False)
        popbased.drop_duplicates(subset='hotelcode',keep='first',inplace=True)
        if popbased.empty==True:
            print('Sorry No Hotels Available\n tune your constraints')
        else:
            return popbased[['hotelname','roomtype','guests_no','starrating','address','roomamenities','ratedescription']].head(10)
#---------------------------------------------------------------------------------

    def requirementbased(self,city,number,features):
        self.hotel['city']=self.hotel['city'].str.lower()
        self.hotel['roomamenities']=self.hotel['roomamenities'].str.lower()
        features=features.lower()
        features_tokens=word_tokenize(features)  
        sw = stopwords.words('english')
        #lemm = WordNetLemmatizer()
        f1_set = {w for w in features_tokens if not w in sw}
        f_set=set()
        for se in f1_set:
            f_set.add(self.lemm.lemmatize(se))
        reqbased=self.hotel[self.hotel['city']==city.lower()]
        reqbased=reqbased[reqbased['guests_no']==number]
        reqbased=reqbased.set_index(np.arange(reqbased.shape[0]))
        l1 =[];l2 =[];cos=[];
        #print(reqbased['roomamenities'])
        for i in range(reqbased.shape[0]):
            temp_tokens=word_tokenize(reqbased['roomamenities'][i])
            temp1_set={w for w in temp_tokens if not w in sw}
            temp_set=set()
            for se in temp1_set:
                temp_set.add(self.lemm.lemmatize(se))
            rvector = temp_set.intersection(f_set)
            #print(rvector)
            cos.append(len(rvector))
        reqbased['similarity']=cos
        reqbased=reqbased.sort_values(by='similarity',ascending=False)
        reqbased.drop_duplicates(subset='hotelcode',keep='first',inplace=True)
        return reqbased[['hotelname','roomtype','guests_no','starrating','address','roomamenities','ratedescription','similarity']].head(10)
#---------------------------------------------------------------------------------
    def pricing(self, address,city,number,features):
        h=self.hybrid(address,city,number,features)
        price_based=pd.merge(h,self.hotel_cost,left_on=['hotelcode','guests_no'],right_on=['hotelcode','maxoccupancy'],how='inner')
        del price_based['maxoccupancy']
        h=price_based.sort_values(by='var')
        return h.head()
#---------------------------------------------------------------------------------
    def hybrid(self,address,city,number,features):
        R=6373.0#Earth's Radius
        features=features.lower()
        features_tokens=word_tokenize(features)
        sw = stopwords.words('english')
        f1_set = {w for w in features_tokens if not w in sw}
        f_set=set()
        for se in f1_set:
            f_set.add(self.lemm.lemmatize(se))
        dist=[]
        lat1 = '51.76582971519959'
        long1 = '-0.0978403976350889'
        lat1=radians(float(lat1))
        long1=radians(float(long1))
        hybridbase=self.hotel[self.hotel['guests_no']==number]
        hybridbase['city']=hybridbase['city'].str.lower()
        hybridbase=hybridbase[hybridbase['city']==city.lower()]
        hybridbase.drop_duplicates(subset='hotelcode',inplace=True,keep='first')
        hybridbase=hybridbase.set_index(np.arange(hybridbase.shape[0]))
        for i in range(hybridbase.shape[0]):
            lat2=radians(hybridbase['latitude'][i])
            long2=radians(hybridbase['longitude'][i])
            dlon = long2 - long1
            dlat = lat2 - lat1
            a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
            c = 2 * atan2(sqrt(a), sqrt(1 - a))
            distance = R * c
            dist.append(distance)
        hybridbase['distance']=dist
        hybridbase=hybridbase.sort_values(by='distance',ascending=True)
        hybridbase=hybridbase.head(15)
        hybridbase=hybridbase.set_index(np.arange(hybridbase.shape[0]))
        coss=[]
        for i in range(hybridbase.shape[0]):
            temp_tokens=word_tokenize(hybridbase['roomamenities'][i])
            temp1_set={w for w in temp_tokens if not w in sw}
            temp_set=set()
            for se in temp1_set:
                temp_set.add(self.lemm.lemmatize(se))
            rvector = temp_set.intersection(f_set)
            coss.append(len(rvector))
        hybridbase['similarity']=coss
        return hybridbase.sort_values(by='similarity',ascending=False).head(10)
#---------------------------------------------------------------------------------
    def hotelRecommendation(self,cty):
        self.city = cty
        self.hotel, self.hotel_cost = self.readData()
        hname = self.citybased(self.city)

        self.room_no=[
            ('king',2),
            ('queen',2), 
            ('triple',3),
            ('master',3),
            ('family',4),
            ('murphy',2),
            ('quad',4),
            ('double-double',4),
            ('mini',2),
            ('studio',1),
            ('junior',2),
            ('apartment',4),
            ('double',2),
            ('twin',2),
            ('double-twin',4),
            ('single',1),
            ('diabled',1),
            ('accessible',1),
            ('suite',2),
            ('one',2)
        ]

        self.calc()

        self.pop_citybased(self.city,4)

        self.hotel['roomamenities']=self.hotel['roomamenities'].str.replace(': ;',',')

        self.requirementbased(self.city,3,'I need a extra toilet and room should be completely air conditioned.I should have a bathrobe.')

        R=6373.0#Earth's Radius
        sw = stopwords.words('english')
        #self.lemm = WordNetLemmatizer()

        self.hybrid("Big Ben,London",self.city,4,'I need a extra toilet and room should be completely air conditioned.I should have a bathrobe.')

        self.hotel_cost=self.hotel_cost.drop(['id','refid','websitecode','dtcollected','ratedate','los','guests','roomtype','netrate','ratedescription','ratetype','sourceurl','roomamenities','ispromo','closed','discount','promoname','status_code','taxstatus','taxtype','taxamount','proxyused','israteperstay','hotelblock','input_dtcollected'],axis=1)

        hot=self.hotel_cost.groupby(['hotelcode','maxoccupancy'])

        self.hotel_cost.sort_values(by=['onsiterate'],ascending=False)
        self.hotel_cost=self.hotel_cost.drop_duplicates(subset=['hotelcode','maxoccupancy'],keep='first')

        var=hot['onsiterate'].var().to_frame('varience')
        l=[]
        for i in range(self.hotel_cost.shape[0]):
            
            var1=var[var.index.get_level_values(0)==self.hotel_cost.iloc[i][0]]
            #print(var1[var1.index.get_level_values(1)==hotel_cost.iloc[i][3]]['varience'])
            x = var1[var1.index.get_level_values(1)==self.hotel_cost.iloc[i][3]]['varience']
            x = x.to_frame()
            x = x.to_dict('split')
            x = x['data'][0][0]
            l.append(x)

        self.hotel_cost['var']=l
        self.hotel_cost=self.hotel_cost.fillna(0)
        self.hotel_cost['mealinclusiontype']=self.hotel_cost['mealinclusiontype'].replace(0,'No Complimentary')

        hotel1=pd.merge(self.hotel,self.hotel_cost,left_on=['hotelcode','guests_no'],right_on=['hotelcode','maxoccupancy'],how='inner')

        hotel1=hotel1.drop_duplicates(subset=['hotelcode','maxoccupancy'],keep='first')

        df1 = self.pricing("Tower of London",'Ontario',4,'I need an alarm clock and a kettle flask.')

        df2 = df1.to_dict()

        print(df2)

        return df2








