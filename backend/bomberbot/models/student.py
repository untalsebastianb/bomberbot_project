import uuid
from django.db import models
from .school import School
from .classroom import Classroom


class Student(models.Model):
    """Model that is an abstraction of a student inside the platform"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    school_id = models.ForeignKey(School, on_delete=models.CASCADE)
    classroom_id = models.ManyToManyField(Classroom, blank=True)
    first_name = models.CharField(max_length=30,blank=False)
    last_name = models.CharField(max_length=30,blank=False)
    email = models.EmailField(max_length=30,blank=True)
    address = models.CharField(max_length=30,blank=True)
    create=models.DateTimeField(auto_now_add=True)
    modified=models.DateTimeField(auto_now=True)
    def __str__(self):
        """Return username."""
        return self.first_name
