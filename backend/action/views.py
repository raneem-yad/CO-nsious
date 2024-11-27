from rest_framework import generics
from .models import Action
from .serializers import ActionSerializer
from rest_framework.generics import ListCreateAPIView

class ActionListCreateView(generics.ListCreateAPIView):
    queryset = Action.objects.all()  # Get all Action objects
    serializer_class = ActionSerializer