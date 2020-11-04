"""Teacher model"""

import uuid
from django.db import models
from .school import School


class Teacher(models.Model):
    """Model that is an abstraction of a teacher inside the platform

    Args:
        first_name: teacher first name.
        last_name: teacher last name.
        school_id: school id to which the teacher must be assigned.
        email: teacher email.
        address: teacher address.
        city: city where the teacher is located.
        score: teacher score.
        status: teacher platform license status (active or inactive).
        age: teacher age.
        phone: teacher phone number.
        academic_dg: teacher academic degree.
        picture: teacher profile picture.
    """
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=30, blank=False)
    school_id = models.ForeignKey(School, on_delete=models.CASCADE)
    email = models.EmailField(max_length=30, blank=False, unique=True)
    address = models.CharField(max_length=30, blank=True)
    city = models.CharField(max_length=30, blank=True)
    score = models.FloatField(blank=True, null=True, default=0)
    status = models.BooleanField(default=True)
    age = models.IntegerField(blank=False)
    phone = models.CharField(max_length=30, blank=True, null=True)
    academic_dg = models.CharField(max_length=30, blank=False)
    picture = models.ImageField(upload_to='users/pictures', blank=True, null=True)
    create = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        """Method to return string representation of a model instance.

        Returns:
            [str]: teacher first name.
        """
        return self.first_name
