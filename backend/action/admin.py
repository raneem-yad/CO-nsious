from django.contrib import admin
from .models import Action


@admin.register(Action)
class ActionAdmin(admin.ModelAdmin):
    list_display = ['employee', 'measure', 'date_taken', 'points_awarded']
    search_fields = ['employee', 'measure', 'date_taken']
    list_filter = ['measure']
    ordering = ['employee']

