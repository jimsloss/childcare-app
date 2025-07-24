from django.db import models
from datetime import date

# Create your models here.


class Menu(models.Model):
    MORNING = 'AM'
    LUNCH = 'MD'
    AFTERNOON = 'PM'
    MEALTIME_CHOICES = [
        (MORNING, 'Morning'),
        (LUNCH, 'Lunch'),
        (AFTERNOON, 'Afternoon')
    ]
    mealtime = models.CharField(
        max_length=2,
        choices=MEALTIME_CHOICES,
        default=MORNING,
    )

    MONDAY = 'MON'
    TUESDAY = 'TUE'
    WEDNESDAY = 'WED'
    THURSDAY = "THU"
    FRIDAY = "FRI"
    SATURDAY ="SAT"
    DAY_CHOICES = [
        (MONDAY, 'Monday'),
        (TUESDAY, 'Tuesday'),
        (WEDNESDAY, 'Wednesday'),
        (THURSDAY, 'Thursday'),
        (FRIDAY, 'Friday'),
        (SATURDAY, 'Saturday'),
    ]
    day = models.CharField(
        max_length=3,
        choices=DAY_CHOICES,
        default=MONDAY,
    )

    content = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.day} {self.mealtime}: {self.content} "

class Holidays(models.Model):
    holiday = models.CharField(max_length=20)
    datefrom = models.DateField()
    dateto = models.DateField()
    
    def __str__(self):
       return f"{self.holiday} : {self.datefrom} - {self.dateto}"

class Invoices(models.Model):
    month = models.DateField() # display using datetime functions
    surname = models.CharField(max_length=20)
    firstname =models.CharField(max_length=20)

