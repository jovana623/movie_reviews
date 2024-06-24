from django.contrib import admin
from .models import Actor

# Register your models here.

class ActorAdmin(admin.ModelAdmin):
    list_display=('name','nationality','birth_date')
    search_fields=('name','nationality',)
    list_filter=('nationality',)

admin.site.register(Actor,ActorAdmin)