import uuid
from django.db import models
from .school import School

class Teacher(models.Model):
    """Model that is an abstraction of a teacher inside the platform"""
    # TEACHER_STATUS = [('A', 'Active'), ('I', 'Inactive')]
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    first_name = models.CharField(max_length=30,blank=False)
    last_name = models.CharField(max_length=30,blank=False)
    school_id = models.ForeignKey(School, on_delete=models.CASCADE)
    email = models.EmailField(max_length=30,blank=False, unique=True)
    address = models.CharField(max_length=30,blank=True)
    city = models.CharField(max_length=30,blank=True)
    score = models.FloatField(blank=True, null=True, default=0)
    # status = models.CharField(default=('A', 'Active') ,max_length=1, choices=TEACHER_STATUS)
    status = models.BooleanField(default=True)
    age = models.IntegerField(blank=False)
    phone = models.CharField(max_length=30,blank=True,null=True)
    academic_dg = models.CharField(max_length=30, blank=False)
    picture=models.ImageField(
        upload_to='users/pictures',
        blank=True,
        null=True
    )
    create=models.DateTimeField(auto_now_add=True)
    modified=models.DateTimeField(auto_now=True)
    def __str__(self):
        """Return username."""
        return self.first_name


