from django.shortcuts import render

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
        if serializer.is_valid():
            user =serializer.save()
            return Response({"message": "User registered successfully", "user_id":user.id}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


