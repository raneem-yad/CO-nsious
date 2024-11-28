from django.db import models
from django.contrib.auth.models import User
from action.models import Action
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.validators import MinValueValidator

from django_resized import ResizedImageField

# maps one-to-one with each user
class EmployeeProfile(models.Model):
    employee = models.OneToOneField(User, on_delete=models.CASCADE)
    total_points = models.IntegerField(default=0, validators=[MinValueValidator(0)])
    employee_image = ResizedImageField(
        size=[200, None],
        quality=100,
        upload_to="profiles/",
        force_format="WEBP",
        blank=False,
        null=False,
        default="/profiles/profile_footprint_jowwx7.png",
    )
    image_alt = models.CharField(
        max_length=100, null=False, blank=False, default="profile image"
    )

    def __str__(self):
        return self.employee.username
        
    def update_employee_points(sender, instance, created, **kwargs):
        self.total_points += points
        self.save()
