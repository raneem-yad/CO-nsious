from django.urls import path
from .views import EmployeeProfileListCreateView

urlpatterns = [
    path('', EmployeeProfileCreateView.as_view(), name='employeeprofile-list-create'),
]
