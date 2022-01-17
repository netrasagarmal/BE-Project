from django.db import models

# Create your models here.

class AttractionRec(models.Model):
    userId = models.BigAutoField(primary_key=True)

    uName = models.CharField("user full name", max_length=50)

    destinationCity = models.CharField("destination", max_length=30)
    startCity = models.CharField("starting city", max_length=30)
    returnCity = models.CharField("returning city", max_length=30)

    minBudget = models.IntegerField()
    maxBudget = models.IntegerField()

    startDate = models.DateField()
    endDate = models.DateField()
    noOfDays = models.IntegerField()

    category1 = models.CharField("returning city", max_length=30)
    cat1Rating = models.IntegerField()

    category2 = models.CharField("returning city", max_length=30)
    cat2Rating = models.IntegerField()

    category3 = models.CharField("returning city", max_length=30)
    cat3Rating = models.IntegerField()

    category4 = models.CharField("returning city", max_length=30)
    cat4Rating = models.IntegerField()

    category5 = models.CharField("returning city", max_length=30)
    cat5Rating = models.IntegerField()


