from django.urls import path
from .views import EmployeeProfileListCreateView

urlpatterns = [
    path('', EmployeeProfileListCreateView.as_view(), name='employeeprofile-list-create'),
]
