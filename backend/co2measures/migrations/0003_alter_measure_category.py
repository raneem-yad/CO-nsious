from django.db import migrations

def update_measure_categories(apps, schema_editor):
    Measure = apps.get_model('co2measures', 'Measure')
    Category = apps.get_model('category', 'Category')

    # Define a mapping of categories (if needed)
    category_mapping = {
        "Transport": "Transport",
        "Waste Reduction": "Waste Reduction",
        "Energy Saving": "Energy Saving",
    }

    # Iterate over all Measure objects
    for measure in Measure.objects.all():
        category_name = measure.category  # category is a string at this point
        try:
            # Try to get the corresponding Category object
            category_obj = Category.objects.get(name=category_name)
            measure.category = category_obj.id  # Update the category to be the ID of the Category object
            measure.save()
        except Category.DoesNotExist:
            # If the category does not exist, log the error
            print(f"Category '{category_name}' does not exist!")
            # Optionally, assign a default category (uncomment next line if you want this behavior)
            # measure.category = Category.objects.get(name="Default Category").id
            measure.save()

class Migration(migrations.Migration):

    dependencies = [
        ('co2measures', '0002_remove_employeeprofile_user_measure_category_and_more'),  # Adjust this to the previous migration
    ]

    operations = [
        migrations.RunPython(update_measure_categories),
    ]
