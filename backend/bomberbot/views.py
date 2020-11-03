"""General views"""

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.db.utils import IntegrityError
from django.contrib.auth.models import User
from django.http import HttpResponse
from bomberbot.models import School



@login_required
def home_view(request):
    """View to render the home view (react build) if user is logged
    Returns:
        response: with a render of index.html from react frontend
    """
    logged_user = request.user.id
    school = School.objects.get(user_id=logged_user)
    response = render(request, 'index.html')
    # set a cookie with the user
    response.set_cookie('user', logged_user)
    # set a cookie with the school_id
    response.set_cookie('school_id', school.id)
    return response


def login_view(request):
    """View to render the login view
    Returns:
        response: with a render of login.html if request method isn't POST,
                  a render of home if user is logged or an error message if
                  data login are wrong
    """
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        # check if username + password are valid and login the user
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            # Redirect to home - react frontend
            return redirect('home')
        else:
            return render(request, 'login.html', {'error': 'Invalid Username or Password'})
    return render(request, 'login.html')


@login_required
def logout_view(request):
    """View to logout the user if are already logged in
    Returns:
        redirect: redirect to login screen
    """
    logout(request)
    return redirect('login')


def signup_view(request):
    """view of the signup
    Returns:
        render: signup.html template with error message if data are wrong
        redirect('home'): Redirect to home view if a school is created
    """
    if request.method == 'POST':
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password']
        password_confirm = request.POST['password_confirmation']

        # password confirm box validation
        if password != password_confirm:
            error = 'The passwords do not match.'
            return render(request, 'signup.html', {'error': error})
        u = School.objects.filter(email=email)
        # Validate if email exist
        if u:
            error = f'There is another account using {email}'
            return render(request, 'signup.html', {'error': error})
        us = User.objects.filter(username=username)
        # Validate if username exist
        if us:
            error = f'There is another account using {username}'
            return render(request, 'signup.html', {'error': error})
        try:
            # Create the user with all data
            user = User.objects.create_user(
                username=username, password=password)
            user.save()
            school = School(user=user)
            school.picture = request.FILES.get('picture')
            school.name = request.POST['schoolname']
            school.email = email
            school.country = request.POST['country']
            school.address = request.POST['address']
            school.postal_code = request.POST['postcode']
            school.city = request.POST['city']
            school.phone = request.POST['phone']
            school.save()
            login(request, user)
            # Redirect to home view if a school is created
            return redirect('home')
        except IntegrityError as ie:
            # Return an error if something is wrong
            error = f'There is another account using {usermame}'
            return render(request, 'signup.html', {'error': error})
    return render(request, 'signup.html')
