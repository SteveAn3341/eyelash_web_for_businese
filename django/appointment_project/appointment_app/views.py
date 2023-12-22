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
from django.http import JsonResponse, HttpResponse
from .models import App_User 

from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404



@api_view(["POST"])
def employee(request):
    name = request.data.get('name')
    if not name:
        return Response({'error': 'Name is required'}, status=status.HTTP_400_BAD_REQUEST)
    new_employee = Employee.objects.create(name=name)
    return Response({'new_employee added': True}, status=status.HTTP_201_CREATED)



@api_view(["POST"])
def customer(request):
    # Extract data from request.data
    first_name = request.data.get('first_name')
    last_name = request.data.get('last_name')
    email = request.data.get('email')
    phone = request.data.get('phone')

    # Create a new Customer instance and save it to the database
    try:
        new_customer = Customer.objects.create(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone=phone
        )
        # After saving, new_customer will have the id attribute set to the newly created ID
        return JsonResponse({'new_customer_added': True, 'id': new_customer.id})
    except Exception as e:
        # Handle any exceptions (like invalid data or database errors)
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)










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
        return HttpResponse(the_index.read())
    
    
  

    
@api_view(["GET","POST"])
def signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            user = App_User.objects.create(userName=email, password=make_password(password))
            user.save()
            return JsonResponse({'message': 'User created successfully'}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)
    




@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(request, username=email, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'success': True, 'message': 'Login successful'})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid credentials'}, status=400)







@api_view(["GET"])
def curr_user(request):
    if request.user.is_authenticated:
        user_info = serialize("json", [request.user], fields = ['name', 'email'])
        user_info_workable = json.loads(user_info)
        return JsonResponse({'user':user_info_workable[0]['fields']})
    else:
        return JsonResponse({'user':None})
    
    
    
    
@api_view(["POST"])
def logout_view(request):
    try:
        logout(request)
        return JsonResponse({'signout':True})
    except Exception as e:
        print(e)
        return JsonResponse({'signout':False})
    
    
    
    
    
@api_view(["GET"])
def all_menu(request):
    services = Service.objects.all()
    services_data = [{'id': service.id, 'service_name': service.service_name} for service in services]
    return JsonResponse(services_data, safe=False)




@api_view(["GET"])
def All_Employee(request):
    all_employee = Employee.objects.all()
    all_employee_data = [{'name':employee.name} for employee in all_employee ]
    return JsonResponse(all_employee_data,safe=False)



@api_view(["GET"])
def get_customer(request, customer_id):
    if request.method == 'GET':
        try:
            customer = Customer.objects.get(id=customer_id)
            customer_data = {
                'id': customer.id,
                'first_name': customer.first_name,
                'last_name': customer.last_name,
                'email': customer.email,
                'phone': customer.phone
            }
            return JsonResponse(customer_data)
        except Customer.DoesNotExist:
            return JsonResponse({'error': 'Customer not found'}, status=404)
        
        
        
@api_view(["GET"])
def all_customer(request):
    all_customers = Customer.objects.all()
    all_customers_data = [
        {   
            'id': customer.id, 
            'first_name': customer.first_name,
            'last_name': customer.last_name,
            'email': customer.email,
            'phone': customer.phone
        } for customer in all_customers
    ]
    return JsonResponse(all_customers_data, safe=False)





@api_view(['POST'])
def date(request):
    service = request.data.get('service')
    employee =request.data.get('employee')
    date = request.data.get('date')
    time = request.data.get('time')
    customer_info=request.data.get('customer_info'),
    try:
        new_appointment = Appointment.objects.create(
            date=date,
            time=time,
            service = service,
            employee = employee,
            customer_info = customer_info
        )
        return JsonResponse({'success': True, 'appointment_id': new_appointment.id})
    except Exception as e:
        return JsonResponse({'success': False, 'error': str(e)})
    
    
    
    
    
    
@api_view(['GET'])
def list_appointments(request):
    appointments = Appointment.objects.all()
    appointments_data = []

    for appointment in appointments:
        appointment_dict = {
            'id': appointment.id,
            'service': appointment.service,
            'date': appointment.date,
            'time': appointment.time,
            'employee': appointment.employee,
            'customer_info': appointment.customer_info[0] if appointment.customer_info else {}
        }
        appointments_data.append(appointment_dict)

    return Response(appointments_data)








@api_view(['GET'])
def get_appointment(request, appointment_id):
    appointment = get_object_or_404(Appointment, id=appointment_id)
    appointment_data = {
        'id': appointment.id,
        'service': appointment.service,
        'date': appointment.date,
        'time': appointment.time,
        'employee': appointment.employee,
        'customer_info': appointment.customer_info[0] if appointment.customer_info else {}
    }
    return JsonResponse(appointment_data)