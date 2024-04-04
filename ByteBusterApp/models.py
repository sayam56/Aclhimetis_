from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils.safestring import mark_safe


class PricingTable(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Associate with the logged-in user
    zip_content = models.BinaryField()  # Store the zip file content

    def __str__(self):
        return f'PricingTable object (id: {self.id}, user: {self.user.username})'

    def download_link(self):
        if self.zip_content:
            url = reverse('ByteBusterApp:download_zip', args=[str(self.id)])
            return mark_safe(f'<a href="{url}">Download</a>')
        return '(No file)'
    download_link.short_description = 'Zip File'
