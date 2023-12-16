from django.db import models

from django.db import models

class Employee(models.Model):
    name = models.CharField(max_length=200)
    # Add additional fields if needed, like email, department, etc.

class Customer(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    # You might also want to include address or other relevant details.

class Service(models.Model):
    service_name = models.CharField(max_length=200)
    # You can add more fields such as description, duration, price, etc.

class Appointment(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.SET_NULL, null=True) # Assuming an appointment is for a specific service.
    date = models.DateField()
    time = models.TimeField()
    # Optionally, you could add a status field (e.g., scheduled, cancelled, completed).

