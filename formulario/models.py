from django.db import models


# Create your models here.
class Materia(models.Model):
    nombre_materia = models.CharField(max_length=30)

    class Meta:
        verbose_name_plural = "Materias"

    def __str__(self):
        return f"{self.nombre_materia}"

    def __unicode__(self):
        return self.nombre_materia


class Alumno(models.Model):
    nombre_alumno = models.CharField(max_length=40)
    apellido_alumno = models.CharField(max_length=70)
    telefono_alumno = models.CharField(max_length=10)
    email_alumno = models.EmailField(max_length=50)

    class Meta:
        verbose_name_plural = "Alumnos"

    def __str__(self):
        return f"{self.nombre_alumno}"

    def __unicode__(self):
        return self.nombre_alumno