from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from category.models import Category

def get_default_user():
    # This function retrieves the 'admin' user as the default
    return User.objects.get(username='admin').id

# A measure that it is open to an employee to take.
class Measure(models.Model):

    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    description = models.TextField()
    points = models.IntegerField(validators=[MinValueValidator(0)]) # Points awarded for taking this action
    creator = models.ForeignKey(User, on_delete=models.CASCADE, default=get_default_user)

    def __str__(self):
        return self.name
        