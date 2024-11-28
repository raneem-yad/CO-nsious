# Generated by Django 4.2.16 on 2024-11-27 21:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_create_category_model'),
        ('co2measures', '0003_alter_measure_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='measure',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='category.category'),
        ),
    ]
