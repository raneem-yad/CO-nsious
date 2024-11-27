from django.urls import path
from .views import MeasureListCreateView

urlpatterns = [
    path('', MeasureListCreateView.as_view(), name='measure-list-create'),
]
