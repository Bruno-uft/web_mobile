from django.views.generic import View, CreateView, TemplateView
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from rest_framework import status
from conta.forms import RegistroForm
from conta.serializers import UserSerializer

class Index(LoginRequiredMixin, TemplateView):
    template_name = 'index.html'

class Login(View):
    def get(self, request):
        contexto = {'mensagem': ''}
        if request.user.is_authenticated:
            return redirect('index')
        else:
            return render(request, 'autenticacao.html', contexto)
    
    def post(self, request):
        usuario = request.POST.get('username', None)
        senha = request.POST.get('password', None)

        user = authenticate(request, username=usuario, password=senha)
        if user is not None:
            if user.is_active:
                login(request, user)
                return redirect('index')
            else:
                return render(request, 'autenticacao.html', {'mensagem': "Usuário inativo"})
        else:
            return render(request, 'autenticacao.html', {'mensagem': "Usuario ou senha inválidos"})

class Logout(View):
    def get(self, request):
        logout(request)
        return redirect(settings.LOGIN_URL)

class LoginAPI(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({ 
            'id': user.id,
            'token': token.key,
            'nome': user.first_name,
            'email': user.email
        })

class Registro(CreateView):
    model = User
    form_class = RegistroForm
    template_name = 'registro.html'
    success_url = reverse_lazy('login')

    def form_valid(self, form):
        user = form.save(commit=False)
        user.set_password(form.cleaned_data['password'])
        user.save()
        return super().form_valid(form)

class RegistroAPI(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'id': user.id,
                'token': token.key,
                'nome': user.first_name,
                'email': user.email
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
