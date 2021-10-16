from django.shortcuts import render
import pyrebase

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# Create your views here.

#config file for realtime database
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
  "private_key_id": "9cca2ed20be5151f93e22481a429c4e944d677d2",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDRG0TPkO0QuSgp\nrhiVfHEtXo2q0r+U3aSlh1UxDBplhKxDTYHVgL1XBu5L3RsIxHPv60a8xeklrdbn\nwLKK9cv5IJJYsoGYvc8uOq0tbBP/XR5p0JR/TYuIbepb0T+F0ps+bHsr/TCo/COO\nI7MPpE7Utmvf1TQB7BaxxQPDxhA0RwsFUWuHqIloIYWYvego4oIwAe7onmaBa/Vw\nTjShMW55MRgll9zOGOPgNRh45kPkAl7GTblHjyCVSu0l78rehOO+MZRFQinMixma\nVMzEv785eTJGaTLKLayQKXSB/wato8AQf9eTsV7OtIwSsudrd/r4QSNhfImV4FzH\nT2T2n6+lAgMBAAECggEACiVATrDZq7bMGc+aXkBiLmEYzwm4JWUmnKhnDADqE/Re\ntko/qyf6p8sMi05ARknf1SttbHHOyNb5Jxfsobzgx2ba6uZITuygrX3H0r0ccEao\nl9o4pj+RLk6k8Q0DP78y7JGvXThE4OIQ6I/XW4Itl/j83WiXBCPcCwaD0v8cYKje\nPysAy45T3KP7CNI0IBpY3footJxs0QqOYK8ZfNeX4SQ/ajPWO6DQgqUxCvRfsCri\nWG8P1FBaYv8obLpY0hgeFeOEof2GjQIazqyEjwmpifcXigOvuJlzjFrnt+PGZsrb\nIUyK1pSfxajU2VqeKp/LnKB8E7wFxzKHAOCd3X3oUQKBgQD4/qVgvV0MhLan/7jw\nccqfGJUJvRfUu3xINdzx8FqXP+QBGjZUWFAh7hho6DgjGcWTpVYfVY2qNzcOZoYf\nEXJWVjeRoO0LfD227xXXucfChGD8SBlqJh/MGx7V4wveZy8CYKfUmAkZgfHr2aNO\nsCA3tse+tAQ+3tEEj27R7iZIdQKBgQDW/VU8W/Je1zuh+e8DUvtjnnAKXSENhNrF\nV3fJwAdj5S26HtLqbD1x5waXR5/i9JRjASIW01ZIeBQeMsf2wpdRcju0TjcBKqGn\nR+Qk10OKAuqkZ1FvdB33f5yyuXpuF3VAGYnyWRJLHSu69Q2fWrbiwufQ0w9OdhBv\neRmySDxkcQKBgQC/TWZiXRsQcyajDKZalhLHCWv4f3+/wgxKrpeCitgPPNdAwZLc\nWr22U+gNMd1vmm1icrUofeLJ1IJIXhzN4emmy7cF/E4jdOE1m5t8kxAXMv4Q1pQw\nKfpkJrIaQsbrqPtFKF3JyMW1A1GLkzsVSdx28celjUl1xFty1YCfagmfwQKBgQCS\nuUxNqFbOYUgCcKetdhm5UC0Y9ZwUNOJ1og9Psm2YwJUnm9fIQ1zf+pKl9izpYJBQ\nzTotp8gQJ1tbjL6p6v4IiNS0Zljlw+mVV9wdRIiEjR8EWrraPL4i5oXT9//VWM8d\nkxBxRFbWyq7IpmvIoMmGEwzQmOquWqc23Mgrw17sEQKBgQDOkebvXhoY2pECzeq+\nyBFTHlmwRu7tNShrb0x9JEbYXRXmHdVnv45maUmYuUdg0GLv0B5013myBjCvKaOY\nnAsI+G6zgMKoEjswwbDF809fGl07dbn2BB+lW+r1ZJaaJfER0kPe8VNv/1c2mAlq\nvoPlUsQzH5pQF8AUiTqC61kHEA==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-d214u@trip-planner-9213c.iam.gserviceaccount.com",
  "client_id": "113495702055334146769",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d214u%40trip-planner-9213c.iam.gserviceaccount.com"
}

# Realtime Database
firebase = pyrebase.initialize_app(config)
authe = firebase.auth()
database = firebase.database()

#Firestore Database
# Use a service account
cred = credentials.Certificate(firebaseConfig)
firebase_admin.initialize_app(cred)
db = firestore.client()


def Home(request):

    #Realtime Database
    print("- - - - - - - - - - - - - - - - Realtime Database - - - - - - - - - - - - - - - -")
    ContName = database.child('Data').child('TouristPlacesData').child('ContinentName').get().val()

    print("- - - - - - - - - - - - - - firestore Database - - - - - - - - - - - - - - - -")

    #firestore Database
    users_ref = db.collection(u'ContName')
    docs = users_ref.stream()

    for doc in docs:
        print(f'{doc.id} => {doc.to_dict()}')

    print("- - - - - - Method 1- - - - - - - - - - - - - -")
    doc1 = db.collection('ContName').document('Asia').collection('India').document('Maharashtra').collection('Pune').document('Agakhan Palace')
    res = doc1.get().to_dict()
    print(res)

    print("- - - - - - Method 2- - - - - - - - - - - - - -")
    avgrat = db.collection('ContName').document('Asia').collection('India').document('Maharashtra').collection('Pune').document('Agakhan Palace').get().to_dict()
    #for field in avgrat:
    #    print("Field_name : {field}, Field_type : {field.type}")
    print(avgrat['ContName'])

    

    return render(request, 'index.html',{
        "ContName": ContName,
    })
