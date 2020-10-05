import uuid
from django.db import models
from .classroom import Classroom
from .student import Student

class Lesson(models.Model):
    """Model that is an abstraction of a lesson inside the platform"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=30)
    class_room_id = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    student_id = models.ManyToManyField(Student)
    score = models.BigIntegerField()