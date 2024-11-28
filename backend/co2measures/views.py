from rest_framework import generics
from .models import Measure
from .serializers import MeasureSerializer
from rest_framework.generics import ListCreateAPIView

class MeasureListCreateView(generics.ListCreateAPIView):
    queryset = Measure.objects.all().order_by('action')
    serializer_class = MeasureSerializer
