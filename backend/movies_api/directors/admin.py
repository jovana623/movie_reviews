from django.contrib import admin
from .models import Director

# Register your models here.

class DirectorAdmin(admin.ModelAdmin):
    list_display=('name','nationality','birth_date')
    search_fields=('name','nationality')
    list_filter=('nationality',)


admin.site.register(Director,DirectorAdmin)