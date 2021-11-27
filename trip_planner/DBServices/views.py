from django.shortcuts import render
from django.shortcuts import render
# to allow other domains easily access our methods
from django.views.decorators.csrf import csrf_exempt
from pyasn1.type.univ import Null
#json parser to parse the in concomming data into the data model
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
import pyrebase
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import haversine as hs
import json

#-------------------------------------------------------
hotel = 0
# Shertom Grand: 18.535789612977258, 73.87097441520766
hLat = 18.535789612977258
hLong = 73.87097441520766
#-------------------------------------------------------

# https://www.oscaralsing.com/firebase-authentication-in-django/        



@csrf_exempt
# Normally when you make a request via a form you want the form being submitted to your view to 
# originate from your website and not come from some other domain. To ensure that this happens, you 
# can put a csrf token in your form for your view to recognize. If you add @csrf_exempt to the top 
# of your view, then you are basically telling the view that it doesn't need the token. This is a 
# security exemption that you should take seriously.



#global fdb
def initDB():
        #fdb = None
        global fdb
        if not firebase_admin._apps:
            #config file for realtime database
            print(" Static method running")
            config = {
                "apiKey": "AIzaSyDVb384H6b84ZpBN0LCElUbQC4CKJZLYJo",
                "authDomain": "trip-planner-9213c.firebaseapp.com",
                "databaseURL": "https://trip-planner-9213c-default-rtdb.firebaseio.com",
                "projectId": "trip-planner-9213c",
                "storageBucket": "trip-planner-9213c.appspot.com",
                "messagingSenderId": "964535624554",
                "appId": "1:964535624554:web:1e3dc773e18e1dde85bb13",
            }

            #config file for firestore database
            firebaseConfig = {
              "type": "service_account",
              "project_id": "trip-planner-9213c",
              "private_key_id": "842233eebe543f3317c065c3414da72ea94d2cae",
              "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDil0Qrbt9y8vrf\nRDrVqfj5H9KBo9PRYjDJhzlzuJft71jDYK6bbm9GYGYsb3PEVQXqyfQUzaDJeBSQ\nNFlxgn4y/+6Z5Yq5Q5ZpuRbpsOdKZbB7gBxwcCYb+aaBrD5FHtW0WOOdt2IWYSjX\nzX1gi3QXRj46yJ9PDH3OldVODMNd8oHa9DjeD/c1obuxi9ADdA/+9otl/bH0jFZk\nAC8Et7p0MIUTc75Bja4bCOXSCmOyadNO/q9kNEsxtWToo36BJYuHyeEKde+96hCg\nMpbzSahuN6dyaDkRaMWAReESbLsRUuHqB+1XcmzQFj4xSfVnWMyyvKf6HsWXDPeJ\nk8JpwhQpAgMBAAECggEADTRyB1LyiC0jVBwSjq2VYhVJ6/6rYy4k+DWeckE9b2MN\nqfMqMcoth20qPygul7A5xE1JIWY7WspZ7m5ykPQhHSE/my3el/3Zl+cur+c8j2Ae\nORBF+AJ9Ig+6NZ/fUCFkJFqyxxfvCi1W1z61Mglmdk3EZiIXcKCie0XNlLsXLpQN\njSDPzdldnD95xcjouG5FVxPqE7Mg+8vb8m1BxGr0VTHxM8gItojpRZFHSAIr6f03\n8egyt3lBr0zu/Z1oWPQrUX6yjWYWvEfnFufRulsoNSxj0vAJyeR+qi606n7TfdRD\njOQ0PHZ92zduogx5ifNxGEkXVGsYSuf97mDWSxT3wQKBgQDy5JP6XhXWabPNTGju\nOML5AT6sUU8ntYdrpiCKBFtMjCOt3hRYvpwmjFJgfWJ5/oLSZW7ZAaV8oSVA/oMz\nKsz6pj0+GCfVV4gV1j7Cm75+qjDYqKp+rTsWtpe5Z82+fiy5P5649DKcxcG/9H/u\n384LwtQAsTvC8zXFRxVr7mA2YQKBgQDu0XxZvIJvHLoZi1BTxLF5TI+GwzpZlpYR\ng/a5FOP6eQPh5r+qx/3b6iulq22NfmeJLHJ0KNBzd/jnVX8Xpot9WQ+Ots649yfk\nHMocnu/i8cAgQaXzgSqLmj/NVN/409kq4kvFOdOwweccseo10sQ2CcCyT3GiM7/Q\nbE0xtI6iyQKBgQDaOXWeDuPt1OAfRlRMG6FI2M53QUItuhGmLQa1Gb7xYkM4FfwP\n04k1tQLaACz20Cy3XTyfKbSF6b4vy7sSwJSTacJCRK+dJNx2Shvu+sDGyp/COJ+d\n2oPpHznn8RRP3srN0RQIthW29pHhpYk/k8JqnKuex52axKp9ySS86Nl2YQKBgQCc\n5aP8kIxg006wWYZ8gkzWlCX3M2uyT+xntXryPXdJpxeV4jMp0BpH0KC8RtPCkbkT\ntc+74NSSB8/Oq6zDrPcXctt1t0Q44KekhgWCqCiRwKGoj3inccSx0rT4ATrkDsou\nEl4VRNh+1+UuRPTKR54AooemnerZ1YW/OGe+sBDFgQKBgQDQSvoMJ+MDZrNnI0lG\ntVI44PROThWIjJ5HpxsgPPKwFHKTNXZcqinkST8oN2Z865RtkNmdA88BwScH7dLN\nmfchF1mzCAYJ6f2UFAUIipfZjZT7z3EEP21Rwtu1ez/l4/CouhTCT/fXzhjDqM9+\nLbiRzGuIll4xkiwcJY3DkAIqEA==\n-----END PRIVATE KEY-----\n",
              "client_email": "firebase-adminsdk-d214u@trip-planner-9213c.iam.gserviceaccount.com",
              "client_id": "113495702055334146769",
              "auth_uri": "https://accounts.google.com/o/oauth2/auth",
              "token_uri": "https://oauth2.googleapis.com/token",
              "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
              "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d214u%40trip-planner-9213c.iam.gserviceaccount.com"
            }

            # Realtime Database
            #firebase = pyrebase.initialize_app(config)
            #authe = firebase.auth()
            #rdb = firebase.database()

            #Firestore Database
            cred = credentials.Certificate(firebaseConfig)
            firebase_admin.initialize_app(cred)
            fdb = firestore.client()

            print("Configured and connected to database of trip planner")
            
        #return fdb
class TPDB:
    
    rdbname = ''
    rContinent = ''
    rCountry = ''
    rState = ''
    rCity = ''
    
    
    def __init__(self,dbname,Continent,Country,State,City):
        self.rdbname = dbname
        self.rContinent = Continent
        self.rCountry = Country
        self.rState = State
        self.rCity = City
           
    
    def getContinent():
        continents = fdb.collection('ContName')
        contQuery = continents.stream()
        continentList = []
        for continent in contQuery:
            #print continents(document)
            continentList.append(continent.id)
        return continentList
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    def getCountry(self):

        continents = fdb.collection(self.rdbname)
        contQuery = continents.stream()
        countryList = []

        for continent in contQuery:
            if(continent.id == self.rContinent):
                for country in continent.reference.collections():
                    countryList.append(country.id)
                break
        return countryList
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    def getState(self):

        states = fdb.collection(self.rdbname).document(self.rContinent).collection(self.rCountry)
        stateQuery = states.stream()
        stateList = []

        for state in stateQuery:
            stateList.append(state.id)
        return stateList
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    def getCity(self):

        states = fdb.collection(self.rdbname).document(self.rContinent).collection(self.rCountry)
        stateQuery = states.stream()
        cityList = []

        for state in stateQuery:
            if(state.id == self.rState):
                for city in state.reference.collections():
                    cityList.append(city.id)
                break
        return cityList
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    def getPlace(self):

        places = fdb.collection(self.rdbname).document(self.rContinent).collection(self.rCountry).document(self.rState).collection(self.rCity)
        placeQuery = places.stream()
        placeList = []

        for place in placeQuery:
            placeList.append(place.id)
        return placeList
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    def getPlaceFields(self,rPlace):

        placeField = fdb.collection(self.rdbname).document(self.rContinent).collection(self.rCountry).document(self.rState).collection(self.rCity).document(rPlace).get().to_dict()
        return placeField
    
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    def getAllLocationsFromCity(self):
        rPlaces = TPDB.getPlace(self)
        dict_main = {}
        for i in rPlaces:
            #rPlace = i
            #print(i)
            dict_main[i] = {}
            dict_main[i]['Latitude'] = 0.0
            dict_main[i]['Longitude'] = 0.0
            dct = TPDB.getPlaceFields(self,i)
            #print(dct)
            dict_main[i]['Latitude'] = dct['Latitude']
            dict_main[i]['Longitude'] = dct['Longitude']
        return dict_main
    
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    


    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    
    # x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x    
    def getPopularityIndexofPlaces(self):
        #dictionary of popularity index (pi)
        dict_pi={}
        rPlaces = TPDB.getPlace(self)
        for i in rPlaces:
            fieldDict = TPDB.getPlaceFields(self,i)
            dict_pi[i] = fieldDict['PopularityIndex']
        return dict_pi

class PlacePriority:
    
    rContinent = ''
    rCountry = ''
    rState = ''
    rCity = ''
    noOfDays = 0
    rdbname = ''
    
    
    def __init__(self,dbname,Continent,Country,State,City,rnoOfDays):
        self.rdbname = dbname
        self.rContinent = Continent
        self.rCountry = Country
        self.rState = State
        self.rCity = City
        self.noOfDays = rnoOfDays
    

        
    def calculateEucldDistance(self,dict_AllPlaceLocationFromGivenPlace, pList, place ):
    
        avgDist = 0.0
        tpl = ()
        distFromGivenPlace = {}
        for i in pList: 
            lat1 = 0.0
            lat2 = 0.0
            long1 = 0.0
            long1 = 0.0

            lat1 = dict_AllPlaceLocationFromGivenPlace[place]['Latitude']
            long1 = dict_AllPlaceLocationFromGivenPlace[place]['Longitude']
            lat2 = dict_AllPlaceLocationFromGivenPlace[i]['Latitude']
            long2 = dict_AllPlaceLocationFromGivenPlace[i]['Longitude'] 

            dist = 0
            dist = PlacePriority.calculateDistance(self,lat1,long1,lat2,long2)

            distFromGivenPlace[i] = dist
            avgDist = avgDist + dist

        #print(distFromGivenPlace)
        avgDist = avgDist / len(pList)-1
        avgDist = round(avgDist,1)
        tpl = (distFromGivenPlace, avgDist)
        return tpl
    
    def calculateDistance(self,lat1,long1,lat2,long2):
        loc1=(lat1,long1)
        loc2=(lat2,long2)
        dist = round(hs.haversine(loc1,loc2))
        return dist
    
    #methode to calculate no of places to select based on number of days user has entered
    def placesOnNoOfDays(self):
        
        dict_AllPlaceLocation = TPDB.getAllLocationsFromCity(self)
        #print(dict_AllPlaceLocation)
        
        #to store places and locations that can be visited based on no of days of trip in dictionary
        dict_placesLocOnNoOfDays = {}
        #to store places and locations that can be visited based on no of days of trip in list
        list_placesLocOnNoOfDays = []
        #to store places no of places possible to visit and store in tuple
        NoOfPlacesPossibletoVisit = (1,3,7,)
        #get dictionary of popularity index
        dict_pi = TPDB.getPopularityIndexofPlaces(self)
        #print(dict_pi)
        dict_popularityIndexofPossiblePlaces = {}
        #print(len(dict_pi))
        num = NoOfPlacesPossibletoVisit[self.noOfDays-1]
        if(num >= len(dict_pi)):
            num = len(dict_pi)
        for i in range(num):
            #print(i)
            #valP = [k for k, v in dict_pi.items() if v == i]
            valP = list(dict_pi.keys())[list(dict_pi.values()).index(i+1)]

            dict_placesLocOnNoOfDays[valP] = {}
            dict_placesLocOnNoOfDays[valP] = dict_AllPlaceLocation[valP]

            dict_popularityIndexofPossiblePlaces[valP] = dict_pi[valP]

            list_placesLocOnNoOfDays.insert(i,valP)

        # isert dictionary, list and dictionary in tuple
        tpl = (dict_placesLocOnNoOfDays,list_placesLocOnNoOfDays, dict_popularityIndexofPossiblePlaces)
        return tpl
    
    def addHotelInLD(self,aPlaces,dict_AllPlaceLocationActual):
        # list to store places which are actually there with their names
        #aPlaces = []
        #aPlaces = list_placesLocOnNoOfDays
        #rPlaces = TPDB.getPlace(objTPDB)
        aPlaces.insert(len(aPlaces)+1,'Hotel Grand Sherton')

        # dictionary to store places name with hotel name
        #dict_AllPlaceLocationActual = dict_placesLocOnNoOfDays
        dict_AllPlaceLocationActual['Hotel Grand Sherton'] ={} 
        dict_AllPlaceLocationActual['Hotel Grand Sherton']['Latitude'] = hLat
        dict_AllPlaceLocationActual['Hotel Grand Sherton']['Longitude'] = hLong
        tpl = (aPlaces,dict_AllPlaceLocationActual)

        return tpl

    def removeHotelInLD(self,aPlaces,dict_AllPlaceLocationActual,distFromGivenPlace):
        #remove hotel name from list and dict
        aPlaces.remove('Hotel Grand Sherton')
        del dict_AllPlaceLocationActual['Hotel Grand Sherton']
        del distFromGivenPlace['Hotel Grand Sherton']

        tpl = (aPlaces,dict_AllPlaceLocationActual,distFromGivenPlace)

        return tpl
    
    def getPlacePriority(self,rPlaces):
        priorityList = []
        priorityDict = {}

        tpl = PlacePriority.placesOnNoOfDays(self)
        #to store places and locations that can be visited based on no of days of trip in dictionary
        dict_placesLocOnNoOfDays = {}
        #to store places and locations that can be visited based on no of days of trip in list
        list_placesLocOnNoOfDays = []
        list_placesLocOnNoOfDays = tpl[1]
        dict_placesLocOnNoOfDays = tpl[0]
        
        dict_popularityIndexofPossiblePlaces = tpl[2]
        
        print('\n ------dict_placesLocOnNoOfDays-----------\n\n')
        print(dict_placesLocOnNoOfDays)
        print('\n -----------------------\n\n')
        print('\n ---------list_placesLocOnNoOfDays--------------\n\n')
        print(list_placesLocOnNoOfDays)
        print('\n -----------------------\n\n')
        print('\n ----------dict_popularityIndexofPossiblePlaces-------------\n\n')
        print(dict_popularityIndexofPossiblePlaces)
        print('\n -----------------------\n\n')

        
        a=10
        exit = 0
        # pli : popularity list index variable pointer
        pli=0
        day = 0
        
        #-----------------------------
        list_noOfPlacesPerDay = []
        if(self.noOfDays == 1):
            list_noOfPlacesPerDay = [1]
        if(self.noOfDays == 2):
            list_noOfPlacesPerDay = [1,2]
        if(self.noOfDays == 3):
            list_noOfPlacesPerDay = [1,4,2]
            
            
        #-------calculation starts here----------------------
        for i in list_noOfPlacesPerDay :

            print(f'Entered main for {i}' )
            
            day = day + 1
            print('--------Day is ---------------------')
            print(day)
            print('-----------------------------')
            if(a == 10):
                
                # noppd : no of places per day
                noppd= i
                
                # if no on places per day = 1 and day = 1
                if(noppd == 1 and day == 1):
                    print("Entered if 1")
                    #--------------------------------------------------------------------
                    #add hotel in location list

                    tpl1 = ()
                    tpl1 = PlacePriority.addHotelInLD(self,list_placesLocOnNoOfDays,dict_placesLocOnNoOfDays)

                    #calculate distance of places from hotel
                    tpl2 = ()
                    tpl2 = PlacePriority.calculateEucldDistance(self,tpl1[1],tpl1[0], 'Hotel Grand Sherton' )


                    distFromGivenPlace = {}
                    distFromGivenPlace = tpl2[0]

                    #working: print(distFromGivenPlace)

                    avgDist = tpl2[1]
                    avgDistHalf = avgDist/2

                    #remove hotel name from list and dict
                    tpl3 = PlacePriority.removeHotelInLD(self,list_placesLocOnNoOfDays,dict_placesLocOnNoOfDays,distFromGivenPlace)

                    # store places after removing hotel name
                    list_placesLocOnNoOfDays = tpl3[0]
                    dict_placesLocOnNoOfDays = tpl3[1]
                    distFromGivenPlace = tpl3[2]
                    flag = 0
                    for i in list_placesLocOnNoOfDays:

                        print(distFromGivenPlace[i])
                        distance1 = avgDist+avgDistHalf
                        distance2 = distFromGivenPlace[i]
                        distance2 = float(distance2)
                        #if all conditions satisfy then add the place to priority list
                        if(distance2 <= distance1):
                            flag = 1
                            priorityList.insert(pli,i)
                            priorityDict[pli+1] = i
                            list_placesLocOnNoOfDays.remove(i)
                            del dict_placesLocOnNoOfDays[i]
                            print(priorityList)
                            pli = pli + 1
                            break
                        #if nothing works go to next place   
                        else: 
                            print("place not added")
                            continue
               #--------------------------------------------------------     



                if(noppd >= 3 and day != self.noOfDays):


                    print("Entered if 3")
                    #--------------------------------------------------------------------
                    tpl1 = ()
                    tpl1 = PlacePriority.addHotelInLD(self,list_placesLocOnNoOfDays,dict_placesLocOnNoOfDays)

                    #calculate distance of places from hotel
                    tpl2 = ()
                    tpl2 = PlacePriority.calculateEucldDistance(self,tpl1[1],tpl1[0], 'Hotel Grand Sherton' )


                    distFromGivenPlace = {}
                    distFromGivenPlace = tpl2[0]

                    #working: print(distFromGivenPlace)

                    avgDist = tpl2[1]
                    avgDistHalf = avgDist/2

                    #remove hotel name from list and dict
                    tpl3 = PlacePriority.removeHotelInLD(self,list_placesLocOnNoOfDays,dict_placesLocOnNoOfDays,distFromGivenPlace)

                    # store places after removing hotel name
                    list_placesLocOnNoOfDays = tpl3[0]
                    dict_placesLocOnNoOfDays = tpl3[1]
                    distFromGivenPlace = tpl3[2]

                    flag = noppd
                    # while loop for selecting 2 tplaces
                    while(flag>0):
                        # for loop for selecting best place to visit first (i.e. prioritizing day schedule)
                        for i in list_placesLocOnNoOfDays:

                            distance1 = avgDist+avgDistHalf
                            distance2 = distFromGivenPlace[i]
                            distance2 = float(distance2)
                            #if all conditions satisfy then add the place to priority list
                            if(distance2 <= distance1):
                                flag = flag - 1
                                priorityList.insert(pli,i)
                                priorityDict[pli+1] = i
                                list_placesLocOnNoOfDays.remove(i)
                                del dict_placesLocOnNoOfDays[i]
                                print(priorityList)
                                pli = pli + 1
                                break
                            #if nothing works go to next place   
                            else: 
                                print("place not added")
                                continue

                #if(noppd == 3 and day != noOfDays):

                if(noppd == 2 and day == self.noOfDays ):
                    print("Entered if 4")
                    #--------------------------------------------------------------------
                    tpl1 = ()
                    tpl1 = PlacePriority.addHotelInLD(self,list_placesLocOnNoOfDays,dict_placesLocOnNoOfDays)

                    #calculate distance of places from hotel
                    tpl2 = ()
                    tpl2 = PlacePriority.calculateEucldDistance(self,tpl1[1],tpl1[0], 'Hotel Grand Sherton' )


                    distFromGivenPlace = {}
                    distFromGivenPlace = tpl2[0]

                    #working: print(distFromGivenPlace)

                    avgDist = tpl2[1]
                    avgDistHalf = avgDist/2

                    #remove hotel name from list and dict
                    tpl3 = PlacePriority.removeHotelInLD(self,list_placesLocOnNoOfDays,dict_placesLocOnNoOfDays,distFromGivenPlace)

                    # store places after removing hotel name
                    list_placesLocOnNoOfDays = tpl3[0]
                    dict_placesLocOnNoOfDays = tpl3[1]
                    distFromGivenPlace = tpl3[2]

                    
                    flag = noppd
                    # while loop for selecting 2 tplaces
                    while(flag>0):
                        #if(len(list_placesLocOnNoOfDays)>=2):
                        
                            # for loop for selecting best place to visit first (i.e. prioritizing day schedule)
                            for i in list_placesLocOnNoOfDays:

                                distance1 = avgDist+avgDistHalf
                                distance2 = distFromGivenPlace[i]
                                distance2 = float(distance2)
                                
                                if(len(list_placesLocOnNoOfDays) == 1):
                                    flag = 0
                                    priorityList.insert(pli,i)
                                    priorityDict[pli+1] = i
                                    list_placesLocOnNoOfDays.remove(i)
                                    del dict_placesLocOnNoOfDays[i]
                                    print(priorityList)
                                    pli = pli + 1
                                    exit = 1
                                    break
                                
                                #if all conditions satisfy then add the place to priority list
                                if(distance2 <= distance1):
                                    flag = flag - 1
                                    priorityList.insert(pli,i)
                                    priorityDict[pli+1] = i
                                    list_placesLocOnNoOfDays.remove(i)
                                    del dict_placesLocOnNoOfDays[i]
                                    print(priorityList)
                                    pli = pli + 1
                                    break
                                #if nothing works go to next place   
                                else:
                                    
                                    print("place not added")
                                    print(list_placesLocOnNoOfDays)
                                    #continue



            if(exit == 1):
                print("All program finished ")
                break
        #priorityList
        #priorityDict
        tpl4 = (priorityList,priorityDict)
        return tpl4


class PlanTrip:
    
    rdbname = ''
    rContinent = ''
    rCountry = ''
    rState = ''
    rCity = ''
    noOfDays = 0
    avgBdgpp = 0
    nop = 0
        
        
    def acceptInput():
        
        #global fdb
        #TPDB.__init__(obj)
        #fdb = initDB()
        initDB()
        print("\nEnter details where you want to go:")
        
        print(TPDB.getContinent())

        #rContinent = input("\nEnter Continent Name\t")
        rContinent = 'Asia'

        #rCountry = input("\nEnter Country Name\t")
        rCountry = 'India'

        #rState = input("\nEnter State Name\t")
        rState = 'Maharashtra'

        #rCity = input("\nEnter City Name\t")
        rCity = 'Pune'
        
        rdbname = 'ContName'
        objTPDB1 = TPDB(rdbname,rContinent,rCountry,rState,rCity)
        
        
        print(TPDB.getCountry(objTPDB1))
        print(TPDB.getState(objTPDB1))
        print(TPDB.getCity(objTPDB1))
        
        print(f'\nPlaces to visit in {rCity} are:\n')
        rPlaces = TPDB.getPlace(objTPDB1)
        for i in rPlaces:
            print(f'\t{i}')
            
        #noOfDays = int(input("Enter No of days of your trip:\n"))
        noOfDays = 3
        
        #nop : number of people
        #nop = int(input("Enter total number of people going for a trip:\n"))
        nop = 2
        
        #avgBdgpp : average Budget per person
        #avgBdgpp = int(input("Enter average budget per person for your trip including accomodation:\n"))
        avgBdgpp = 6000
        
        objPlacePriority = PlacePriority(rdbname,rContinent,rCountry,rState,rCity,noOfDays)
        
        PlacePriority.getPlacePriority(objPlacePriority,rPlaces)    
        
PlanTrip.acceptInput()         



def Home(request):
    return render(request, 'index.html')
