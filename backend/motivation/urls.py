from django.urls import path
from .views import MotivationalMessageView

urlpatterns = [
    path('', MotivationalMessageView.as_view(), name='motivational-message'),
]