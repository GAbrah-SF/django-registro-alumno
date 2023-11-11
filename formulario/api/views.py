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
            alumno = get_object_or_404(Alumno, id=request.data.get('id'))

            # Utilizar el serializer para validar y actualizar los datos
            serializer = AlumnoSerializer(alumno, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()
                return Response({"icon": "success", "message": "Datos actualizados correctamente"})

            else:
                return Response({"icon": "error", "message": "Datos no válidos"}, status=status.HTTP_400_BAD_REQUEST)

        except KeyError:
            return Response({"icon": "error", "message": "Datos incompletos"}, status=status.HTTP_400_BAD_REQUEST)


class DeleteAlumno(APIView):
    def post(self, request, *args, **kwargs):
        try:
            alumno = get_object_or_404(Alumno, id=request.data.get('id'))
            alumno.delete()

            return Response({'icon': 'success', 'message': 'Alumno eliminado'}, status=status.HTTP_200_OK)

        except Alumno.DoesNotExist:
            return Response({'icon': 'error', 'message': 'Alumno no encontrado'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            return Response({'icon': 'error', 'message': f'Error al eliminar alumno: {str(e)}'},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)
