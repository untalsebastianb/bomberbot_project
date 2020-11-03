"""Api views"""

from bomberbot.models import Teacher, School, Classroom, Lesson
from django.views import View
from django.http import JsonResponse
from django.forms.models import model_to_dict
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import SchoolSerializer, TeacherSerializer, ClassroomSerializer, LessonSerializer
from rest_framework import viewsets


class SchoolViewSet(viewsets.ModelViewSet):
    """Return a Viewset of School model

    Returns:
        queryset (obj): all schools if user is None or a school if the user is a valid id
    """

    serializer_class = SchoolSerializer

    def get_queryset(self):

        queryset = School.objects.all().order_by('name')
        user = self.request.query_params.get('user', None)
        if user is not None:
            queryset = queryset.filter(user=user)
        return queryset


class TeacherViewSet(viewsets.ModelViewSet):
    """Return a Viewset of Teacher model
    Returns:
        queryset (obj): all the teachers if the school_id is None or
                  the teachers of one school if the school_id is a valid id
    """

    serializer_class = TeacherSerializer

    def get_queryset(self):

        queryset = Teacher.objects.all().order_by('first_name')
        school_id = self.request.query_params.get('school_id', None)
        if school_id is not None:
            queryset = queryset.filter(school_id=school_id)
        return queryset


class ClassroomViewSet(viewsets.ModelViewSet):
    """Return a Viewset of Classroom model
    Returns:
        queryset (obj): all the classrooms if the teacher_id is None or
                  the classrooms of one teacher if the teacher_id is a valid id
    """

    serializer_class = ClassroomSerializer

    def get_queryset(self):

        queryset = Classroom.objects.all().order_by('name')
        teacher_id = self.request.query_params.get('teacher_id', None)
        if teacher_id is not None:
            queryset = queryset.filter(teacher_id=teacher_id)
        return queryset


class LessonViewSet(viewsets.ModelViewSet):
    """Return a Viewset of Lesson model
    Returns:
        queryset (obj): all the lessons if the classroom_id is None or
                  the lessons of one classroom if the classroom_id is a valid id
    """
    serializer_class = LessonSerializer

    def get_queryset(self):

        queryset = Lesson.objects.all().order_by('name')
        classroom_id = self.request.query_params.get('classroom_id', None)
        if classroom_id is not None:
            queryset = queryset.filter(classroom_id=classroom_id)
        return queryset


@api_view(['GET'])
def GeneralReport(request):
    """Return a general report of a school using GET request
    Returns:
        Response(data): a rest_framework response with num_teachers, num_students,
                              teacher_average_age, average_score, teacher_data
    """
    school_id = request.GET.get('id')
    school_info = School.objects.filter(id=school_id)
    teachers = Teacher.objects.filter(school_id=school_id)
    age = 0.0

    # num_lessons_by_classroom = {}
    num_lessons_by_teacher = 0
    num_classrooms_by_teacher = 0
    num_students_by_teacher = 0
    score_by_teacher = 0
    total_score = 0
    teacher_data = []
    num_students = 0

    # Iterates each teacher
    for teacher in teachers:
        teacher_classroom = Classroom.objects.filter(teacher_id=teacher.id)
        # Iterates each classroom
        for classroom in teacher_classroom:
            # Calculate the total of lessons
            num_lessons_by_teacher += (
                len(Lesson.objects.filter(classroom_id=classroom.id)))
            # Calculate the total number of students
            num_students += classroom.num_students
        name_teacher = teacher.first_name + ' ' + teacher.last_name
        num_students_by_teacher = num_students
        score_by_teacher = teacher.score
        total_score += teacher.score
        num_classrooms_by_teacher = (
            len(Classroom.objects.filter(teacher_id=teacher.id)))
        num_students = 0
        age += teacher.age

        # Build the dictionary of each teacher
        teacher_fields = {
            'name': name_teacher,
            'num_students_by_teacher': num_students_by_teacher,
            'score_by_teacher': score_by_teacher,
            'num_classrooms_by_teacher': num_classrooms_by_teacher,
            'num_lessons_by_teacher': num_lessons_by_teacher
        }
        teacher_data.append(teacher_fields)
        num_lessons_by_teacher = 0
        num_students_by_teacher
    average_age = round(age / len(teachers), 2)
    average_score = round(total_score / len(teachers), 2)
    # build the dictionary of the report
    data = {
        'num_teachers': len(teachers),
        'num_students': school_info[0].num_students,
        'teacher_average_age': average_age,
        'average_score': average_score,
        'teacher_data': teacher_data
    }
    return Response(data)


@api_view(['GET'])
def Teacher_By_Id(request):
    """Return the complete data of one Teacher
    Returns:
        Response(data): a rest_framework response with the teachers data if 
                        the teacher_id is valid
    """
    teacher_id = request.GET.get('id')
    teacher = Teacher.objects.filter(id=teacher_id)
    print(type(Response(teacher.values())))
    return Response(teacher.values())


@api_view(['GET'])
def TeacherReport(request):
    """Return a general report of a teacher using GET request
    Returns:
        Response(data): a rest_framework response with name, score, total_students
                        and classrooms information
    """
    num_students = 0
    school_id = request.GET.get('school_id')
    teacher_id = request.GET.get('teacher_id')
    teacher = Teacher.objects.filter(school_id=school_id).filter(id=teacher_id)
    score_by_lesson = {}
    score_by_classroom = {}
    classrooms = []
    average_classroom_score = 0
    total_score = 0
    teacher_classroom = Classroom.objects.filter(teacher_id=teacher_id)
    # Iterates each classroom
    for classroom in teacher_classroom:
        num_students += classroom.num_students
        lessons = Lesson.objects.filter(classroom_id=classroom.id)
        num_lessons = 0
        # Iterates each lesson
        for lesson in lessons:
            total_score += lesson.average_score
            num_lessons += 1
        average_classroom_score = total_score / len(lessons)
        # Build a dictionary with each classroom
        classrooms.append({
            'name': classroom.name,
            'lessons': num_lessons,
            'total_students': classroom.num_students,
            'average_score': average_classroom_score
        })
        lessons_score = {}
        average_classroom_score = 0
        total_score = 0
    # Build a dictionary with each teacher
    data = {
        'name': teacher.values()[0]['first_name'] + ' ' + teacher.values()[0]['last_name'],
        'score': teacher.values()[0]['score'],
        'total_students': num_students,
        'classrooms': classrooms
    }
    return Response(data)
