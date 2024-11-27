from django.db import models
from django.contrib.auth.models import User
from co2measures.models import Measure
from django.core.validators import MinValueValidator

# An action is an instance of an employee taking a one of the measures defined in co2measures/models
class Action(models.Model):
    employee = models.ForeignKey(User, on_delete=models.CASCADE)
    measure = models.ForeignKey(Measure, on_delete=models.CASCADE)
    date_taken = models.DateField(auto_now_add=True)
    points_awarded = models.IntegerField(validators=[MinValueValidator(0)])

    def __str__(self):
        return f"{self.employee.username} - {self.measure.name} on {self.date_taken}"

