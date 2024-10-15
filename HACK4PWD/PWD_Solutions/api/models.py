from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Users(AbstractUser):
    phone_number = models.CharField(max_length=15)
    county= models.CharField(max_length=20)
    dob =models.DateField(null=True, blank=True)
    gender =models.CharField(max_length=10)

    def __str__(self):
        return f'{self.first_name}{self.last_name}'
    