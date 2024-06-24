from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin

# Create your models here.
class UserManager(BaseUserManager):
    def create_user(self,email,password=None,**extra_fields):
        if not email:
            raise ValueError("The email field must be set")
        email=self.normalize_email(email)
        user=self.model(email=email,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self,email,password=None,**extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_superuser',True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be staff')
        
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        
        return self.create_user(email,password,**extra_fields)


class User(AbstractBaseUser,PermissionsMixin):
    email=models.EmailField(unique=True)
    username=models.CharField(max_length=30,unique=True)
    is_staff=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    date_joined=models.DateTimeField(auto_now_add=True)

    objects=UserManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username