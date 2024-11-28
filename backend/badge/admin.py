from django.contrib import admin
from .models import Badge

@admin.register(Badge)
class BadgeAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'image_url', 'description', 'employee', 'actions_required',)
