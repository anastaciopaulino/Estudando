from django.shortcuts import render
from rest_framework import generics
from todos.models import Todo
from todos.serializers import TodoSerializer

# Create your views here.

class DetailTodo(generics.RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class ListTodo(generics.ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer