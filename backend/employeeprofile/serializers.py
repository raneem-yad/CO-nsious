from rest_framework import serializers
from .models import EmployeeProfile

class EmployeeProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Measure
        fields = ['id', 'employee', 'total_points']