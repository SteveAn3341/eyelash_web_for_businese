# Generated by Django 4.2 on 2023-12-20 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appointment_app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customer',
            name='name',
        ),
        migrations.AddField(
            model_name='customer',
            name='first_name',
            field=models.CharField(default='Default Value', max_length=200),
        ),
        migrations.AddField(
            model_name='customer',
            name='last_name',
            field=models.CharField(default='Default Value', max_length=200),
        ),
    ]
