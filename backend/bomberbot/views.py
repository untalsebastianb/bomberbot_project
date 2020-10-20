from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.db.utils import IntegrityError
from django.contrib.auth.models import User
from django.http import HttpResponse
from bomberbot.models import School
# from bomberbot.forms import SchoolFormImage

################################################################
#################login views####################################
################################################################


@login_required
def home_view(request):
    logged_user = request.user.id
    school = School.objects.get(user_id=logged_user)
    response = render(request, 'index.html')
    response.set_cookie('user', logged_user)
    response.set_cookie('school_id', school.id)
    return response

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            # aqui va a redireccion a la pagina de react
            return redirect('home')
        else:
            return render(request, 'login.html', {'error': 'Invalid Username or Password'})
    return render(request, 'login.html')

@login_required
def logout_view(request):
    logout(request)
    return redirect('login')

def signup_view(request):
    # debugger
    # import pdb; pdb.set_trace()
    if request.method == 'POST':
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password']
        password_confirm = request.POST['password_confirmation']
        
        # validacion del pass confirm
        if password != password_confirm:
            error = 'The passwords do not match.'
            return render(request, 'signup.html', {'error': error})
        # filtro con ese correo
        u = School.objects.filter(email=email)
        # si el correo existe...
        if u:
            error = f'There is another account using {email}'
            return render(request, 'signup.html', {'error': error})
        # filtro con ese usuario
        us = User.objects.filter(username=username)
        # valido si usuario existe
        if us:
            error = f'There is another account using {username}'
            return render(request, 'signup.html', {'error': error})
        # USERNAME VALIDATION 
        try:
            user = User.objects.create_user(username=username, password=password)
            user.save()
            # school = SchoolFormImage(request.FILES)
            # school.user = user
            school = School(user=user)
            school.picture = request.FILES.get('picture')
            school.name = request.POST['schoolname']
            school.email = email
            school.country = request.POST['country']
            school.address = request.POST['address']
            school.postal_code = request.POST['postcode']
            school.city = request.POST['city']
            school.phone = request.POST['phone']
            # falta la foto!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            school.save()

            login(request, user)
            # aqui va a redireccion a la pagina de react
            return redirect('home') # CAMBIAR >> Redireccionar a completar perfil
        except IntegrityError as ie:
            error = f'There is another account using {usermame}'
            return render(request, 'signup.html', {'error': error})

    return render(request, 'signup.html')



################################################################
###################api views####################################
################################################################
# from django.contrib.auth.models import User
# from bomberbot.models import Teacher, School, Classroom, Lesson
# mostrat todo
# Modelo.objects.all()

# crear usuario
# User.objects.create(username='user2', password='1122')

# crear school a partir de un usuario
# u = User.objects.create(username='user3', password='1122')
# s = School.objects.create(user=u, country='colombia', address='cra 11 #5-4', phone='23543345', name='Santo tomas', email='st@gm.com', num_students=150)


# # crear teacher a partir de el school anterior
# t = Teacher.objects.create(school_id=s, address='cra 12 #5-44', first_name='Carlos', last_name='Perez', email='carlos6@gm.com', age=33, academic_dg='4')
# # cambio
# t = Teacher.objects.create(school_id=s, address='cra 12 #5-44', phone='63543345', first_name='Carlos', last_name='Perez', email='carlos6@gm.com', age=33, academic_dg='4')

# # crear una clase a partir del teacher creado
# c = Classroom.objects.create(teacher_id=t, name='class 6', num_students=20)

# # puedo buscar un teacher por la id y crear una clase
# t1 = Teacher.objects.get(id=t.id)
# c = Classroom.objects.create(teacher_id=t1, name='class 9', num_students=2)

# # crear una lesson a partir de un classroom
# l=Lesson.objects.create(class_room_id=c, name='10', average_score=4.5)