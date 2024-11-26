from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import Measure, Action, EmployeeProfile
from django.http import HttpResponse

@login_required
def report_action(request):
    # Get all available measures
    measures = Measure.objects.all()

    if request.method == "POST":
        measure_id = request.POST.get("measure")
        measure = Measure.objects.get(id=measure_id)
        date_taken = request.POST.get("date_taken")
        
        # Create a new Action
        action = Action.objects.create(
            employee=request.user,
            measure=measure,
            date_taken=date_taken,
            points_awarded=measure.points
        )
        
        # Update employee's total points
        profile, created = EmployeeProfile.objects.get_or_create(user=request.user)
        profile.update_points(measure.points)
        
        return HttpResponse(f"Action reported: {measure.name}, Points awarded: {measure.points}")
    
    return render(request, "carbonfootprint/report_action.html", {"measures": measures})