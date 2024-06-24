from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

# Register your models here.

class UserAdmin(BaseUserAdmin):
    fieldsets=(
        (None,{'fields':('email','password')}),
        ('Personal info',{'fields':('username',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates',{'fields':('date_joined',)})

    )

    list_display=('username','email','is_staff','is_superuser')
    search_fields = ('email', 'username')
    ordering=('id',)
    readonly_fields = ('date_joined',)


admin.site.register(User,UserAdmin)