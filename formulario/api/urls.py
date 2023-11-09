from django.urls import path
from .views import CreateAlumno, UpdateAlumno, DeleteAlumno

urlpatterns = [
    path("", CreateAlumno.as_view(), name="guardar"),
    path("actualizar/", UpdateAlumno.as_view(), name="actualizar"),
    path("eliminar/", DeleteAlumno.as_view(), name="eliminar"),
]
