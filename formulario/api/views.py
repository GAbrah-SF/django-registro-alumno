from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from formulario.models import Alumno
from .serializers import AlumnoSerializer


class CreateAlumno(APIView):
    def post(self, request):
        # Serializa los datos de entrada utilizando un AlumnoSerializer
        serializer = AlumnoSerializer(data=request.data)

        if serializer.is_valid():
            # Guarda el objeto Alumno en la base de datos
            serializer.save()

            return Response(status=status.HTTP_200_OK,
                            data={"icon": "success", "message": f"Datos guardados correctamente"})
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST,
                            data={"icon": "error", "message": f"Error al recibir datos"})


class UpdateAlumno(APIView):
    def post(self, request):
        try:
            alumno = Alumno.objects.get(id=request.data['update_id_alumno'])
            alumno.nombre_alumno = request.data['update_nombre_alumno']
            alumno.apellido_alumno = request.data['update_apellido_alumno']
            alumno.telefono_alumno = request.data['update_telefono_alumno']
            alumno.email_alumno = request.data['update_email_alumno']
            alumno.save()

            return Response({"icon": "success", "message": "Datos actualizados correctamente"})

        except Alumno.DoesNotExist:
            return Response({"icon": "error", "message": "Alumno no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        except KeyError:
            return Response({"icon": "error", "message": "Datos incompletos"}, status=status.HTTP_400_BAD_REQUEST)


class DeleteAlumno(APIView):
    def post(self, request, *args, **kwargs):
        id_alumno = request.data.get('id')  # Use request.data for POST data in DRF
        try:
            alumno = get_object_or_404(Alumno, id=id_alumno)
            alumno.delete()

            return Response({'icon': 'success', 'message': 'Alumno eliminado'}, status=status.HTTP_200_OK)

        except Alumno.DoesNotExist:
            return Response({'icon': 'error', 'error': 'Alumno no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'icon': 'error', 'error': f'Error al eliminar alumno: {str(e)}'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
