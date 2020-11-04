"""Classroom model"""

import uuid
from django.db import models
from .teacher import Teacher


class Classroom(models.Model):
    """Model that is an abstraction of a classroom inside the platform

    Args:
        name: classroom name.
        teacher_id: teacher id to which the classroom must be assigned.
        num_students: quantity of students that belong to the classroom.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    name = models.CharField(max_length=30)
    teacher_id = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    num_students = models.IntegerField(blank=False)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Method to return string representation of a model instance

        Returns:
            [str]: classroom name.
        """
        return self.name
