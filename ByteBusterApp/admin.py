from django.contrib import admin
from .models import PricingTable, payment

# Register your models here.
admin.site.register(payment)


@admin.register(PricingTable)
class PricingTableAdmin(admin.ModelAdmin):
    list_display = ('user', 'download_link')
