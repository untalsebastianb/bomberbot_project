
from django.contrib import admin
from django.urls import path
from bomberbot import views as api_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', api_views.home_view, name='home'),
    path('login/', api_views.login_view, name='login'),
    path('logout/', api_views.logout_view, name='logout'),
    path('signup/', api_views.signup_view, name='signup'),

]
