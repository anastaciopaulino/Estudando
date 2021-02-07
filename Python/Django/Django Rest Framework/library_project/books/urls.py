from django.urls import path, include
from books.views import BookListView


# APP NAME
app_name = 'books'

urlpatterns = [
   path('', BookListView.as_view(), name='home'), 
]
