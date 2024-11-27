from django.urls import path
from .views import ActionListCreateView

urlpatterns = [
    path('', ActionListCreateView.as_view(), name='action-list-create'),
]
