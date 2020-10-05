from django.contrib import admin
from bomberbot.models import Classroom, Student, School, Teacher, Lesson
# Register your models here.

admin.site.register(Classroom)
admin.site.register(School)
admin.site.register(Student)
admin.site.register(Teacher)
admin.site.register(Lesson)