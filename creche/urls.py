from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path("", views.index, name = 'index'),
    path('login', views.login_view, name = 'login'),
    path('logout', views.logout_view, name = 'logout'),
    path('register', views.register, name = 'register'),
    path('registerview', views.register_view, name = 'registerview'),
    path('passwordreset', views.password_reset, name = 'passwordreset'),
    #path('passwordreset', auth_views.PasswordChangeView.as_view(), name='/passwordreset'),
    path('main', views.main_screen, name = 'mainscreen'),
    path('thisWeek', views.thisWeek, name = 'thisWeek'),
    # menu
    path('menu', views.menu, name = 'menu'),
    path('updatemenu', views.updatemenu, name = 'updatemenu'),
    path('newmenu', views.newmenu, name = 'newmenu'),
    
    # holidays
    path('holidays', views.holidays, name = 'holidays'),
    path('holidaysNextYear', views.holidaysNextYear, name = 'holidaysNextYear'), 

    # holidays - Update form
    path('holidaysUpdate', views.holidaysUpdate, name = 'holidaysUpdate'),
    path('holidaysUpdateAction', views.holidaysUpdateAction, name = 'holidaysUpdateAction'),
    
    # holidays - update form - action
    path('addHoliday', views.addHoliday, name = 'addHoliday'),
    path('removeHoliday', views.removeHoliday, name = 'removeHoliday'),
    path('changeDates', views.changeDates, name = 'changeDates'),
    path('updateHoliday', views.updateHoliday, name = 'updateHoliday'),
    
    
    path('paperwork', views.paperwork, name = 'paperwork'),
    path('popup', views.popup, name = 'popup'),
    path('vaccancies', views.thisWeek, name = 'thisWeek'),
    
    
]