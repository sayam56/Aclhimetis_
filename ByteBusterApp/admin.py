from django.contrib import admin
from .models import PricingTable


# Register your models here.
@admin.register(PricingTable)
class PricingTableAdmin(admin.ModelAdmin):
    list_display = ('user', 'download_link')
