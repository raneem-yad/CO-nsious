from rest_framework import generics
from .models import EmployeeProfile
from .serializers import EmployeeProfileSerializer
from rest_framework.generics import ListCreateAPIView

class ActionListCreateView(generics.ListCreateAPIView):
    queryset = Action.objects.all()  # Get all Action objects
    serializer_class = EmployeeProfileSerializer

