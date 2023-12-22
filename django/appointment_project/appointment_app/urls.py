from django.urls import path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.login_view, name='login'),
    path('curr_user/', views.curr_user, name = 'curruser'),
    path('logout/', views.logout_view, name ='logout'),
    
    path('employee/', views.employee,name='employee'),
    path('customer/', views.customer,name='customer'),
    path('service/', views.service ,name='service'),
    path('appointment/', views.appointment,name='appointment'),
    path("all_the_menu/", views.all_menu, ),
    path('get_customer/<int:customer_id>/', views.get_customer, name='get_customer'),
    path("all_the_employee/", views.All_Employee, ),
    path("all_the_customer/",views.all_customer, ),
    path("date/",views.date,),
    path("viewappointments/", views.list_appointments,),
    path('appointments/<int:appointment_id>/', views.get_appointment, name='get_appointment'),
    
    
    
    
    
    
    
    
    
    
    path('', TemplateView.as_view(template_name='index.html')),
    path('<path:resource>', TemplateView.as_view(template_name='index.html')),
  
    
    
    
    
]