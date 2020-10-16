from rest_framework import serializers
from bomberbot.models import Teacher, School, Classroom, Lesson
from django.contrib.auth.models import User


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'
   

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'
    # def create(self, validate_data):
    #     u = User()
    #     u.username = validate_data.get('user')
    #     u.set_password = validate_data.get('password')
    #     u.save()
    #     instance = School(user=u)
    #     # instance.user = validate_data.get('user')
    #     # instance.set_password = validate_data.get('password')
    #     instance.country = validate_data.get('country')
    #     instance.address = validate_data.get('address')
    #     instance.phone = validate_data.get('phone')
    #     instance.name = validate_data.get('name')
    #     instance.email = validate_data.get('email')
    #     instance.num_students = validate_data.get('num_students')
    #     # instance.picture = validate_data.get('picture')
    #     instance.save()
    #     return instance
    
    # def validate_username(self, data):
    #     schools = School.objects.filter(username=data)
    #     if len(schools) != 0:
    #         raise serializers.ValidationError('User already exist')
    #     else:
    #         return data