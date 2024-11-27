from django.urls import path
from .views import ActionListCreateView

urlpatterns = [
    path('action/', ActionListCreateView.as_view(), name='action-list-create'),
]
