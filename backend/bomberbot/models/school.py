import uuid
from django.db import models
from django.contrib.auth.models import User



class School(models.Model):
    """Model that is an abstraction of a school inside the platform"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    user =models.OneToOneField(User,on_delete=models.CASCADE)
    country = models.CharField(max_length=30,blank=True,null=True)
    city = models.CharField(max_length=30,blank=True,null=True)
    address = models.CharField(max_length=30,blank=True,null=True)
    postal_code = models.CharField(max_length=30,blank=True,null=True)
    
    
    phone = models.CharField(max_length=30,blank=True,null=True)
    name = models.CharField(max_length=30,blank=False)
    email = models.EmailField(unique=True, null=True, blank=True)
    num_students = models.IntegerField(null=True, blank=True)
    picture=models.ImageField(
        upload_to='users/pictures',
        blank=True,
        null=True
    )
    create=models.DateTimeField(auto_now_add=True)
    modified=models.DateTimeField(auto_now=True)
    def __str__(self):
        """Return username."""
        return self.name
