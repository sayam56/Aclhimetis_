from django.db import models
from django.contrib.auth.models import User
from django.db.models import Model
from django.urls import reverse
from django.utils.safestring import mark_safe


class payment(models.Model):
    paymentdone = models.BooleanField(default=False)
    userid = models.ForeignKey(User, on_delete=models.CASCADE)

