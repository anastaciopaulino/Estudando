from django.urls import path, include
from api.views import BookApiView

# APP NAME
app_name = 'api'

urlpatterns = [
    path('', BookApiView.as_view())
]