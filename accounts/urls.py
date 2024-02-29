from django.urls import path

from .views import SignUpView, CustomLoginView


urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
    path('accounts/login/', CustomLoginView.as_view(), name='login'),
]