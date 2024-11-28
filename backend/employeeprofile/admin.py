from django.contrib import admin
from .models import EmployeeProfile


@admin.register(EmployeeProfile)
class EmployeeProfileAdmin(admin.ModelAdmin):
    list_display = ['employee', 'total_points', 'employee_image', 'image_alt']
    search_fields = ['employee',]
    list_filter = ['employee']
    ordering = ['employee']
