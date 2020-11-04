"""Serializer module for the existing models"""

from rest_framework import serializers
from bomberbot.models import Teacher, School, Classroom, Lesson
from django.contrib.auth.models import User


class SchoolSerializer(serializers.ModelSerializer):
    """School model serializer for all fields"""
    class Meta:
        """Meta information about School model"""
        model = School
        fields = '__all__'


class TeacherSerializer(serializers.ModelSerializer):
    """Teacher model serializer for all fields"""
    class Meta:
        """Meta information about Teacher model"""
        model = Teacher
        fields = '__all__'


class ClassroomSerializer(serializers.ModelSerializer):
    """Classroom model serializer for all fields"""
    class Meta:
        """Meta information about Classroom model"""
        model = Classroom
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):
    """Lesson model serializer for all fields"""
    class Meta:
        """Meta information about Lesson model"""
        model = Lesson
        fields = '__all__'
