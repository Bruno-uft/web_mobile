from django.test import TestCase, Client
from django.contrib.auth.models import User
from django.urls import reverse
from rest_framework.authtoken.models import Token
from rest_framework import status

class AuthenticationTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.username = 'testuser'
        self.password = 'testpassword123'
        self.email = 'test@example.com'
        self.user = User.objects.create_user(username=self.username, password=self.password, email=self.email)

    def test_web_login_success(self):
        response = self.client.post(reverse('login'), {
            'username': self.username,
            'password': self.password
        })
        # Check if redirected to the index page
        self.assertEqual(response.status_code, 302)
        self.assertRedirects(response, reverse('index'))

    def test_web_login_failure(self):
        response = self.client.post(reverse('login'), {
            'username': self.username,
            'password': 'wrongpassword'
        })
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Usuario ou senha inválidos")

    def test_api_login_success(self):
        response = self.client.post(reverse('login_api'), {
            'username': self.username,
            'password': self.password
        }, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.json())

    def test_web_registration_success(self):
        response = self.client.post(reverse('registro'), {
            'username': 'newuser',
            'password': 'newpassword123',
            'confirm_password': 'newpassword123',
            'email': 'new@example.com',
            'first_name': 'New',
            'last_name': 'User'
        })
        self.assertEqual(response.status_code, 302)
        self.assertTrue(User.objects.filter(username='newuser').exists())

    def test_api_registration_success(self):
        response = self.client.post(reverse('registro_api'), {
            'username': 'apiuser',
            'password': 'apipassword123',
            'email': 'api@example.com',
            'first_name': 'API',
            'last_name': 'User'
        }, content_type='application/json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(username='apiuser').exists())
