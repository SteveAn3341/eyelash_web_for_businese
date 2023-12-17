from django.urls import path
from django.views.generic import TemplateView
from . import views
urlpatterns = [
    path('employee/', views.employee,name='employee'),
    path('customer/', views.customer,name='customer'),
    path('service/', views.service ,name='menu'),
    path('appointment/', views.appointment,name='appointment'),
    path('', TemplateView.as_view(template_name='index.html')),
    path('<path:resource>', TemplateView.as_view(template_name='index.html')),
]