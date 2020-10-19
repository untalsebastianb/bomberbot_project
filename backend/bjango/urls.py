from django.contrib import admin
from django.urls import path, include
from bomberbot import views as login_views
# from bomberbot.api_views import SchoolAPI, TeacherView, TeachersView
from bomberbot.api_views import SchoolViewSet, TeacherViewSet, ClassroomViewSet, LessonViewSet
from bomberbot.api_views import GeneralReport, TeacherReport



from rest_framework import routers

router = routers.DefaultRouter()

router.register(r'schools', SchoolViewSet, basename='schools')
router.register(r'teacher', TeacherViewSet, basename='teacher')
router.register(r'classroom', ClassroomViewSet, basename='classroom')
router.register(r'lesson', LessonViewSet, basename='lesson')
# urlpatterns = router.urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', login_views.home_view, name='home'),
    path('login/', login_views.login_view, name='login'),
    path('logout/', login_views.logout_view, name='logout'),
    path('signup/', login_views.signup_view, name='signup'),
    
    path('api/general_report/', GeneralReport, name='general_report'),
    path('api/teacher_report/', TeacherReport, name='teacher_report'),



    # path('teachers/', TeachersView.as_view(), name='teachers'),
    # path('teachers/<str:pk>/', TeacherView.as_view(), name='teacher'),
    # path('api/create_school', SchoolAPI.as_view(), name='create_school'),
    path('api/', include(router.urls))
]
