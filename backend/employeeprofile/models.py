from django.db import models
from django.contrib.auth.models import User
from action.models import Action
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.validators import MinValueValidator

# maps one-to-one with each user
class EmployeeProfile(models.Model):
    employee = models.OneToOneField(User, on_delete=models.CASCADE)
    total_points = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    def __str__(self):
        return self.employee.username
        
    def update_employee_points(sender, instance, created, **kwargs):
        self.total_points += points
        self.save()
