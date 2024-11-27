from rest_framework import generics
from .models import Category
from .serializers import CategorySerializer
from rest_framework.generics import ListCreateAPIView

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer