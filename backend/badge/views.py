from rest_framework import generics
from .models import Badge
from .serializers import BadgeSerializer
from rest_framework.generics import ListCreateAPIView

class BadgeListCreateView(generics.ListCreateAPIView):
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer
