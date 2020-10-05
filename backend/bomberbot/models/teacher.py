import uuid
from django.db import models
from .school import School

class Teacher(models.Model):
    """Model that is an abstraction of a teacher inside the platform"""
    TEACHER_STATUS = [('A', 'Active'), ('I', 'Inactive')]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    school_id = models.ForeignKey(School, on_delete=models.CASCADE)
    # picture = models.ImageField('Profile picture', null=True)
    name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    user_name = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    address = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    score = models.BigIntegerField()
    status = models.CharField(max_length=1, choices=TEACHER_STATUS)
