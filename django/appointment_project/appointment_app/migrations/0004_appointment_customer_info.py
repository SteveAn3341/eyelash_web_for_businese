# Generated by Django 4.2 on 2023-12-22 09:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointment_app', '0003_remove_appointment_customer_alter_appointment_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='customer_info',
            field=models.JSONField(default=dict),
        ),
    ]
