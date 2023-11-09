from rest_framework import serializers
from formulario.models import Alumno


class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = ("nombre_alumno", "apellido_alumno", "telefono_alumno", "email_alumno")
