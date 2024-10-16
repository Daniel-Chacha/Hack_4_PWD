from django.shortcuts import render
from django.contrib.auth import authenticate,login,logout

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Users
from .serializers import usersSerializer
import json

@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        serializer = usersSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            user =serializer.save()
            print(user)
            return Response({"message": "User registered successfully", "user_id":user.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_view(request):
    email=request.data.get('email')
    password=request.data.get('password')

    user =authenticate(request, username=email,password=password)

    if user is not None:
        login(request,user)
        return Response({"Message":"Login Successful"}, status=status.HTTP_200_OK)
    else:
        return Response({"error":"Invalid username or password"},status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def logout_view(request):
    logout(request)
    return Response({"message":"Logout successful"}, status=200)