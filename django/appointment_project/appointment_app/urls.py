from django.urls import path
from . import views
urlpatterns = [
    path('employee/', views.employee,name='employee'),
    path('customer/', views.customer,name='customer'),
    path('service/', views.service ,name='menu'),
    path('appointment/', views.appointment,name='appointment'),
]