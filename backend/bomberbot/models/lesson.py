"""Lesson model"""

import uuid
from django.db import models
from .classroom import Classroom


class Lesson(models.Model):
    """Model that is an abstraction of a lesson inside the platform

    Args:
       name: Lesson name.
       classroom_id: classroom id to which the lesson must be assigned.
       average_score: average score for the lesson instance.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=30, blank=False)
    classroom_id = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    average_score = models.FloatField(blank=True)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Method to return string representation of a model instance.

        Returns:
            [str]: lesson name.
        """
        return self.name
