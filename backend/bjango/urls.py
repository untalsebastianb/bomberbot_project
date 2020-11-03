"""Urls of the project"""

from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from rest_framework import routers
from django.conf import settings
from bomberbot import views as login_views
from bomberbot.api_views import GeneralReport, TeacherReport, Teacher_By_Id
from bomberbot.api_views import SchoolViewSet, TeacherViewSet, ClassroomViewSet, LessonViewSet

router = routers.DefaultRouter()
# Register all viewsets
router.register(r'schools', SchoolViewSet, basename='schools')
router.register(r'teacher', TeacherViewSet, basename='teacher')
router.register(r'classroom', ClassroomViewSet, basename='classroom')
router.register(r'lesson', LessonViewSet, basename='lesson')

# Registe all views and apiviews
urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', login_views.home_view, name='home'),
    path('login/', login_views.login_view, name='login'),
    path('', login_views.login_view, name='root'),
    path('logout/', login_views.logout_view, name='logout'),
    path('signup/', login_views.signup_view, name='signup'),
    path('api/general_report/', GeneralReport, name='general_report'),
    path('api/teacher_report/', TeacherReport, name='teacher_report'),
    path('api/teacher_by_id/', Teacher_By_Id, name='teacher_by_id'),
    path('api/', include(router.urls))
# Add media to the url path
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
