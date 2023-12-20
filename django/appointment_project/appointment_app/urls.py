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
    
    
    
    
    path('', TemplateView.as_view(template_name='index.html')),
    path('<path:resource>', TemplateView.as_view(template_name='index.html')),
    
    
    
    
]