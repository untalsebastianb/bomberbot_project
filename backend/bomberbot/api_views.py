from bomberbot.models import Teacher, School, Classroom, Lesson
from django.views import View
from django.http import JsonResponse
from django.forms.models import model_to_dict

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status


# # Create your views here.
from .serializers import SchoolSerializer, TeacherSerializer
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
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer