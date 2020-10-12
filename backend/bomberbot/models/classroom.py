import uuid
from django.db import models
from .teacher import Teacher

class Classroom(models.Model):
    """Model that is an abstraction of a classroom inside the platform"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=30)
    teacher_id = models.ForeignKey(Teacher, on_delete=models.CASCADE)
