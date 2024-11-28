from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator
from category.models import Category


def get_default_user():
    # This function retrieves the 'admin' user as the default
    return User.objects.get(username='admin').id

class Badge(models.Model):

    name = models.CharField(max_length=100, unique=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image_url = models.URLField(max_length=200)
    description = models.TextField()
    employee = models.ForeignKey(User, on_delete=models.CASCADE, default=get_default_user)
    actions_required = models.PositiveIntegerField()

    def __str__(self):
        return self.name
    
