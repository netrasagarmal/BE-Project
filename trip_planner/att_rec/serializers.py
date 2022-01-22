from pickle import FALSE
from rest_framework import serializers
from .models import *

'''class AttractionReccSerializerModel(serializers.serializerserializer):
	class Meta:
		model = AttractionRec
		fields = [
            'userId',
            'userName',
            'destinationCity',
            'startCity',
            'returnCity',
            'minBudget',
            'maxBudget',
            'startDate',
            'endDate',
            'noOfDays',
            'category1',
            'cat1Rating',
            'category2',
            'cat2Rating',
            'category3',
            'cat3Rating',
            'category4',
            'cat4Rating',
            'category5',
            'cat5Rating'
        ]
'''
class AttractionReccSerializer(serializers.Serializer):
    uName = serializers.CharField(max_length=50)

    destinationCity = serializers.CharField(max_length=30)
    startCity = serializers.CharField(max_length=30)
    returnCity = serializers.CharField(max_length=30)

    minBudget = serializers.IntegerField()
    maxBudget = serializers.IntegerField()

    #startDate = serializers.DateField()
    #endDate = serializers.DateField()
    noOfDays = serializers.IntegerField()

    category1 = serializers.CharField(max_length=30)
    cat1Rating = serializers.IntegerField()

    category2 = serializers.CharField(max_length=30)
    cat2Rating = serializers.IntegerField()

    category3 = serializers.CharField(max_length=30)
    cat3Rating = serializers.IntegerField()

    category4 = serializers.CharField(max_length=30)
    cat4Rating = serializers.IntegerField()

    category5 = serializers.CharField(max_length=30)
    cat5Rating = serializers.IntegerField()

class sampleSerializer(serializers.Serializer):
    username = serializers.CharField(max_length = 100)
    name = serializers.CharField(max_length = 100)
    email = serializers.CharField(max_length = 100)
    #age = serializers.CharField(max_length = 100)
    