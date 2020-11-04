from django.contrib import admin
from bomberbot.models import Teacher, School, Classroom, Lesson

# Register the basedata models
admin.site.register(Teacher)
admin.site.register(School)
admin.site.register(Classroom)
admin.site.register(Lesson)