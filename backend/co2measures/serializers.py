from rest_framework import serializers
from .models import Measure

class MeasureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Measure
        fields = ['id', 'name', 'category', 'description', 'points', 'creator']