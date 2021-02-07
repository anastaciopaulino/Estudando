from django.shortcuts import render
from django.views.generic import ListView
from books.models import Book
# Create your views here.

class BookListView(ListView):
    model = Book
    template_name = 'books/books_list.html'
    context_object_name = 'books'