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
class HotelReccSerializer(serializers.Serializer):
    cty = serializers.CharField(max_length=50)

    