from django.urls import path
from .views import CreateAlumno, UpdateAlumno, DeleteAlumno
from .verify import PhoneVerify, EmailVerify

urlpatterns = [
    path("guardar/", CreateAlumno.as_view(), name="guardar"),
    path("actualizar/", UpdateAlumno.as_view(), name="actualizar"),
    path("eliminar/", DeleteAlumno.as_view(), name="eliminar"),

    path("phone-verify/", PhoneVerify.as_view(), name="phone_verify"),
    path("email-verify/", EmailVerify.as_view(), name="email_verify"),
]
