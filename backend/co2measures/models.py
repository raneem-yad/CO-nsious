from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator

class MeasureCategory(models.TextChoices):
    TRANSPORT = 'Transport', 'Transport'
    WASTE_REDUCTION = 'Waste Reduction', 'Waste reduction'
    ENERGY_SAVING = 'Energy Saving', 'Energy saving'

def get_default_user():
    # This function retrieves the 'admin' user as the default
    return User.objects.get(username='admin').id

# A measure that it is open to an employee to take.
class Measure(models.Model):

    name = models.CharField(max_length=255)
    category = models.CharField(max_length=20, choices=MeasureCategory.choices, default=MeasureCategory.TRANSPORT)
    description = models.TextField()
    points = models.IntegerField(validators=[MinValueValidator(0)]) # Points awarded for taking this action
    creator = models.ForeignKey(User, on_delete=models.CASCADE, default=get_default_user)

    def __str__(self):
        return self.name
