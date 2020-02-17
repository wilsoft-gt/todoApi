from django.contrib import admin
from .models import mainItem, childItem, cathegory

# Register your models here.
admin.site.register(childItem)
admin.site.register(mainItem)
admin.site.register(cathegory)