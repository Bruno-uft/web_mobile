from django.contrib import admin
from django.urls import path
from conta.views import Login, Logout, LoginAPI, Registro, RegistroAPI, Index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Index.as_view(), name='index'),
    path('login/', Login.as_view(), name='login'),
    path('logout/', Logout.as_view(), name='logout'),
    path('registro/', Registro.as_view(), name='registro'),
    path('api/login/', LoginAPI.as_view(), name='login_api'),
    path('api/registro/', RegistroAPI.as_view(), name='registro_api'),
]
