"""creche URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from creche import views

from django.conf import settings # new
from django.conf.urls.static import static # new
from django_js_reverse.views import urls_js
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', include('creche.urls')),
    path('', include('child.urls')),
    path('', include('accounts.urls')),
    path('admin/', admin.site.urls),    
    path('jsreverse/', urls_js, name='js_reverse'),

    #path('accounts/', include('django.contrib.auth.urls')),
    
    #new custom change password from
      ##  https://ordinarycoders.com/blog/article/django-password-reset
    
    path('password_reset/done/', auth_views.PasswordResetDoneView.as_view(template_name='password/password_reset_done.html'), name='password_reset_done'),
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name="password/password_reset_confirm.html"), name='password_reset_confirm'),
    path('reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='password/password_reset_complete.html'), name='password_reset_complete'),      

    
    # Change Password
    # path(
    #     'change-password/',
    #     auth_views.PasswordChangeView.as_view(
    #     template_name='Users/password-reset.html',
    #     success_url ='/'
    #     ),
    #     name = 'change_password'    
    # )
]


if settings.DEBUG: # new
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)