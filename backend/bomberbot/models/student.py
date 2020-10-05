import uuid
from django.db import models
from .school import School
from .classroom import Classroom


class Student(models.Model):
    """Model that is an abstraction of a student inside the platform"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    school_id = models.ForeignKey(School, on_delete=models.CASCADE)
    classroom_id = models.ManyToManyField(Classroom)
    name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    address = models.CharField(max_length=50)
