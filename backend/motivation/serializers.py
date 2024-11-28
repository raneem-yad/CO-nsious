from rest_framework import serializers
from .models import MotivationalMessage


class MotivationalMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MotivationalMessage
        fields = '__all__'
