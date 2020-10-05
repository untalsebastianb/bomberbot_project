import uuid
from django.db import models


class School(models.Model):
    """Model that is an abstraction of a school inside the platform"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    # picture = models.ImageField('Profile picture', null=True)
    name = models.CharField(max_length=30)
    country = models.CharField(max_length=30)
    address = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    password = models.CharField(max_length=32)
    email = models.EmailField(unique=True)
