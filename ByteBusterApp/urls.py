"""
URL configuration for carsite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views
from .views import edit_template

# from .views import LabGroupMembersView, SignUpView

app_name = 'ByteBusterApp'

urlpatterns = [
    path('load_template/<str:template_id>', views.load_template, name='load_template'),
    path('', views.homepage, name='homepage'),
    path('template1', views.temp1, name='template1'),
    path('template2', views.temp2, name='template2'),
    path('template3', views.temp3, name='template3'),
    path('template1editor', views.temp1edit, name='template1editor'),
    path('template2editor', views.temp2edit, name='template2editor'),
    path('template3editor', views.temp3edit, name='template3editor'),
    path('pricing', views.pricingpage, name='pricingpage'),
    path('paymentsuccess', views.paymentsuccess, name='paymentsuccess'),
    path('paymentfailed', views.paymentfailed, name='paymentfailed'),
    # path('save_zip_to_db/', views.save_zip_to_db, name='save_zip_to_db'),
    # path('download_zip', views.download_zip, name='download_zip'),
    # path('admin/download_zip/<int:id>', views.download_zip, name='download_zip'),
    # path('login/', views.login_here, name='login'),
    # path('logout/', views.logout_here, name='logout'),
    path('template_editor/', edit_template, name='edit_template'),
]
