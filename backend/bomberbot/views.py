from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.db.utils import IntegrityError
from django.contrib.auth.models import User
from django.http import HttpResponse
from bomberbot.models import School


# Create your views here.
@login_required
def home_view(request):
    return render(request, 'index.html')

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
            school = School(user=user)

            school.name = request.POST['schoolname']
            school.email = email
            school.country = request.POST['country']
            school.address = request.POST['address']
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