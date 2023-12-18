from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from .models import Employee, Customer, Service ,Appointment
from .serializer import AppointmentSerializer
import os 
from django.conf import settings
from rest_framework.decorators import api_view 
from django.contrib.auth import authenticate, login, logout
from django.core.serializers import serialize
import json
from django.http import JsonResponse
from .models import CustomUser
from django.contrib.auth.hashers import make_password



@api_view(["POST"])
def employee(request):
    name = request.data.get('name')
    if not name:
        return Response({'error': 'Name is required'}, status=status.HTTP_400_BAD_REQUEST)
    new_employee = Employee.objects.create(name=name)
    return Response({'new_employee added': True}, status=status.HTTP_201_CREATED)



@api_view(["POST"])
def customer(request):
    name = request.data.get('name')
    email = request.data.get('email')
    phone = request.data.get('phone')
    if not all([name, email, phone]):
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)
    new_customer = Customer.objects.create(name=name, email=email, phone=phone)
    return Response({'new_customer added': True}, status=status.HTTP_201_CREATED)



@api_view(["POST"])
def service(request):
    service_name = request.data.get('service_name')
    if not service_name:
        return Response({'error': 'Service name is required'}, status=status.HTTP_400_BAD_REQUEST)
    new_service = Service.objects.create(service_name=service_name)
    return Response({'new_service_name added': True}, status=status.HTTP_201_CREATED)




@api_view(["GET","POST"])
def appointment(request):
    if request.method == 'GET':
        customer_id = request.query_params.get('customer_id')
        employee_id = request.query_params.get('employee_id')
        service_id = request.query_params.get('service_id')

        # Build the query based on the provided parameters
        query_params = {}
        if customer_id:
            query_params['customer__id'] = customer_id
        if employee_id:
            query_params['employee__id'] = employee_id
        if service_id:
            query_params['service__id'] = service_id

        appointments = Appointment.objects.filter(**query_params)

        # Constructing the response data
        results = [
            {
                'customer': appt.customer.name,
                'employee': appt.employee.name,
                'service': appt.service.name if appt.service else None,
                'date': appt.date,
                'time': appt.time
            } for appt in appointments
        ]

        return Response(results)
    elif request.method == 'POST':
        # Handle POST request for creating a new appointment
        serializer = AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)  # 201 Created
        return Response(serializer.errors, status=400)  # 400 Bad Request
        






def index(request):
    with open(os.path.join(settings.BASE_DIR, 'static', 'index.html'), 'r') as the_index:
        return Response(the_index.read())
    
    
  

    
@api_view(["GET","POST"])
def signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            user = CustomUser.objects.create(email=email, password=make_password(password))
            user.save()
            return JsonResponse({'message': 'User created successfully'}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)
    


@api_view(["GET","POST"])
def login_view(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({'message': 'Login successful'}, status=200)
        else:
            return JsonResponse({'error': 'Invalid credentials'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)