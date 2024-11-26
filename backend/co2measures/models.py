from django.db import models
from django.contrib.auth.models import User


# A measure that it is open to an employee to take.
class Measure(models.Model):

    MEASURE_CATEGORIES = (
        (1, 'Transport'),
        (2, 'Waste reduction'),
        (3, 'Energy saving'),
    )

    name = models.CharField(max_length=255)
    category = models.IntegerField(choices=MEASURE_CATEGORIES)
    description = models.TextField()
    points = models.IntegerField()  # Points awarded for taking this action

    def __str__(self):
        return self.name


# An action is an instance of an employee taking a one of the above measures
class Action(models.Model):
    employee = models.ForeignKey(User, on_delete=models.CASCADE)  # Assuming you're using Django's User model for employees
    measure = models.ForeignKey(Measure, on_delete=models.CASCADE)
    date_taken = models.DateField()
    points_awarded = models.IntegerField()

    def __str__(self):
        return f"{self.employee.username} - {self.measure.name} on {self.date_taken}"


# Each user 
class EmployeeProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    total_points = models.IntegerField(default=0)

    def __str__(self):
        return self.user.username

    def update_points(self, points):
        self.total_points += points
        self.save()


