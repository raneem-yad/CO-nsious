from django.urls import path
from .views import MeasureListCreateView

urlpatterns = [
    path('measures/', MeasureListCreateView.as_view(), name='measure-list-create'),
]
