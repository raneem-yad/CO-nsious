from django.contrib import admin
from .models import Measure

# Register your models here.
@admin.register(Measure)
class MeasureAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'points', 'creator']
    search_fields = ['name', 'category']
    list_filter = ['category']
    ordering = ['name']
