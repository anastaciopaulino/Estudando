from django.test import TestCase
from todos.models import Todo

# Create your tests here.


class TodoModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        Todo.objects.create(title='First todo', body='Body here')
    
    def test_title_content(self):
        todo = Todo.objects.get(id=1)

        expected_object_name = f'{todo.title}'
        self.assertEquals(expected_object_name, 'First todo')

    def test_body_content(self):
        todo = Todo.objects.get(id=1)

        expected_object_name = f'{todo.body}'
        self.assertEquals(expected_object_name, 'Body here')