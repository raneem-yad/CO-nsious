from django.urls import path
from .views import BadgeListCreateView

urlpatterns = [
    path('', BadgeListCreateView.as_view(), name='badge-list-create'),
]