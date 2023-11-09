from django.contrib import admin
from .models import Materia, Alumno


# Register your models here.
@admin.register(Materia)
class TablaEstados(admin.ModelAdmin):
    list_display = ('id', 'nombre_materia')


@admin.register(Alumno)
class TablaEstados(admin.ModelAdmin):
    list_display = ('id', 'nombre_alumno', 'apellido_alumno', 'telefono_alumno', 'email_alumno')
