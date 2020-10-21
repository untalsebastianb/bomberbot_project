from bomberbot.models import Teacher, School, Classroom, Lesson
from django.views import View
from django.http import JsonResponse
from django.forms.models import model_to_dict

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view

# # Create your views here.
from .serializers import SchoolSerializer, TeacherSerializer, ClassroomSerializer, LessonSerializer
from rest_framework import viewsets

# class TeacherViewSet(viewsets.ModelViewSet):
#     serializer_class = TeacherSerializer
#     queryset = Lesson.objects.filter(name='2').exclude(average_score__gte = 4.0)

# class TeachersView(View):
#     def get(self, request):
#         if ('name' in request.GET):
#             _list = Teacher.objects.filter(first_name__contains=request.GET['name'])
#         else:
#             _list = Teacher.objects.all()
#         return JsonResponse(list(_list.values()), safe=False)

# class TeacherView(View):
#     def get(self, request, pk):
#         teacher = Teacher.objects.get(id=pk)
#         print(model_to_dict(teacher))
#         return JsonResponse(model_to_dict(teacher))


# class SchoolAPI(APIView):
#     def post(self, request):
#         serializer = SchoolSerializer( data = request.data )
#         print(request.data)
#         if serializer.is_valid():
#             school = serializer.save()
#             return Response(serializer.data, status = status.HTTP_201_CREATED)
#         else:
#             return Response(serializer.data, status = status.HTTP_400_BAD_REQUEST)


class SchoolViewSet(viewsets.ModelViewSet):
    serializer_class = SchoolSerializer
    def get_queryset(self):

        queryset = School.objects.all().order_by('name')
        user = self.request.query_params.get('user', None)
        if user is not None:
            queryset = queryset.filter(user=user)
        return queryset

class TeacherViewSet(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
    def get_queryset(self):

        queryset = Teacher.objects.all().order_by('first_name')
        school_id = self.request.query_params.get('school_id', None)
        if school_id is not None:
            queryset = queryset.filter(school_id=school_id)
        return queryset


class ClassroomViewSet(viewsets.ModelViewSet):
    serializer_class = ClassroomSerializer
    def get_queryset(self):

        queryset = Classroom.objects.all().order_by('name')
        teacher_id = self.request.query_params.get('teacher_id', None)
        if teacher_id is not None:
            queryset = queryset.filter(teacher_id=teacher_id)
        return queryset


class LessonViewSet(viewsets.ModelViewSet):
    serializer_class = LessonSerializer
    def get_queryset(self):

        queryset = Lesson.objects.all().order_by('name')
        classroom_id = self.request.query_params.get('classroom_id', None)
        if classroom_id is not None:
            queryset = queryset.filter(classroom_id=classroom_id)
        return queryset


@api_view(['GET'])
def GeneralReport(request):
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

    for teacher in teachers:
        teacher_classroom = Classroom.objects.filter(teacher_id=teacher.id)
        for classroom in teacher_classroom:
            # num_lessons_by_classroom[str(classroom.id)] = (len(Lesson.objects.filter(classroom_id=classroom.id)))
            num_lessons_by_teacher += (len(Lesson.objects.filter(classroom_id=classroom.id)))
            num_students += classroom.num_students
        name_teacher = teacher.first_name + ' ' + teacher.last_name
        num_students_by_teacher = num_students
        score_by_teacher = teacher.score
        total_score += teacher.score
        num_classrooms_by_teacher = (len(Classroom.objects.filter(teacher_id=teacher.id)))
        num_students = 0
        
        age += teacher.age

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
    average_age = age / len(teachers)
    average_score = round(total_score / len(teachers), 2)
    data = {
        'num_teachers' : len(teachers),
        'num_students' : school_info[0].num_students,
        'teacher_average_age': average_age,
        'average_score': average_score,
        'teacher_data': teacher_data
    }

    return Response(data)


@api_view(['GET'])
def Teacher_By_Id(request):
        teacher_id = request.GET.get('id')
        teacher = Teacher.objects.filter(id=teacher_id)
        return Response(teacher.values())


@api_view(['GET'])
def TeacherReport(request):
    num_students = 0

    school_id = request.GET.get('school_id')
    teacher_id = request.GET.get('teacher_id')
    teacher = Teacher.objects.filter(school_id=school_id).filter(id=teacher_id)
    
    score_by_lesson = {}
    score_by_classroom = {}
    lessons_score = {}
    classrooms = {}
    average_classroom_score = 0
    total_score = 0

    teacher_classroom = Classroom.objects.filter(teacher_id=teacher_id)
    for classroom in teacher_classroom:
        num_students += classroom.num_students
        lessons = Lesson.objects.filter(classroom_id=classroom.id)
        for lesson in lessons:
            total_score += lesson.average_score
            lessons_score[lesson.name] = lesson.average_score
        average_classroom_score = total_score / len(lessons)

        classrooms[classroom.name] = {
            'score': lessons_score,
            'total_students': classroom.num_students,
            'average_score': average_classroom_score
        }
        lessons_score = {}
        average_classroom_score = 0
        total_score = 0

    data = {
        'general_information': teacher.values()[0],
        'total_students': num_students,
        'classrooms': classrooms
    }
    return Response(data)

