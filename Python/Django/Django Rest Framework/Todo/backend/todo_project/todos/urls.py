from django.urls import path
from todos.views import ListTodo, DetailTodo   

# APP NAME
app_name = 'api'

urlpatterns = [
    path('<int:pk>', DetailTodo.as_view()),
    path('', ListTodo.as_view()),
]