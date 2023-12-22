from django.db import models
from django.contrib.auth.models import AbstractUser




class App_User(AbstractUser):
    email = models.EmailField(blank = True, null = False, unique = True)
    name = models.CharField(max_length = 200, null = False, blank = False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    
    def _str_(self):
        return f"{self.name} | {self.email}"
    
    
    
class Employee(models.Model):
    name = models.CharField(max_length=200)
    # Add additional fields if needed, like email, department, etc.



class Customer(models.Model):
    last_name =  models.CharField(max_length=200,blank = False, null = False, default="Default Value")
    first_name = models.CharField(max_length=200,blank = False, null = False, default="Default Value")
    email = models.EmailField()
    phone = models.CharField(max_length=10)
    # You might also want to include address or other relevant details.



class Service(models.Model):
    service_name = models.CharField(max_length=200)
    # You can add more fields such as description, duration, price, etc.










class Appointment(models.Model):
    service = models.CharField(max_length=100, default="Default Value")
    date = models.DateField(default="Default Value")
    time = models.TimeField(default="Default Value")
    employee = models.CharField(max_length=100, default="Default Value")
    customer_info = models.JSONField(default=dict)

    def __str__(self):
        customer_name = f"{self.customer_info.get('first_name', '')} {self.customer_info.get('last_name', '')}"
        customer_email = self.customer_info.get('email', 'No email')
        customer_phone = self.customer_info.get('phone', 'No phone')
        return f"{customer_name} (Email: {customer_email}, Phone: {customer_phone}) - {self.service} on {self.date} at {self.time}"


