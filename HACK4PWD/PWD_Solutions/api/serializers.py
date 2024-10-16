from rest_framework import serializers
from .models import Users
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password

class usersSerializer (serializers.ModelSerializer):
    class Meta:
        model =Users
        fields =['first_name', 'last_name','username', 'password', 'email', 'phone_number', 'county', 'dob', 'gender']
        extra_kwargs ={'password': {'write_only':True}}

    def create(self, validated_data):
        user=Users(
            first_name= validated_data['first_name'],
            last_name = validated_data['last_name'],
            username = validated_data['username'],
            email= validated_data['email'],
            phone_number = validated_data['phone_number'],
            county = validated_data['county'],
            dob = validated_data['dob'],
            gender =validated_data['gender']
        )
        user.set_password(validated_data['password'])
        print('User Details',user)

        user.save()
        return user

