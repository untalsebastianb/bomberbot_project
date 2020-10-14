import uuid
from django.db import models
from .classroom import Classroom

class Lesson(models.Model):
    """Model that is an abstraction of a lesson inside the platform"""
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=30,blank=False)
    class_room_id = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    average_score = models.FloatField(blank=True)
    create=models.DateTimeField(auto_now_add=True)
    modified=models.DateTimeField(auto_now=True)
    def __str__(self):
        """Return username."""
        return self.name