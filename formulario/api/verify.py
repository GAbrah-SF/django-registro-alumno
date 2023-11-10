from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from formulario.models import Alumno


class PhoneVerify(APIView):
    def post(self, request):
        phone_verify = request.POST.get("phone_verify")
        existing_phone = Alumno.objects.filter(telefono_alumno=phone_verify)

        if existing_phone:
            return Response(status=status.HTTP_410_GONE,
                            data={"icon": "warning", "message": f"Teléfono registrado\nutiliza otro"})
        else:
            return Response(status=status.HTTP_200_OK, data={"icon": "success", "message": f"Teléfono no registrado"})


class EmailVerify(APIView):
    def post(self, request):
        email_verify = request.POST.get("email_verify")
        existing_email = Alumno.objects.filter(email_alumno=email_verify)

        if existing_email:
            return Response(status=status.HTTP_410_GONE,
                            data={"icon": "warning", "message": f"E-mail registrado\nutiliza otro"})
        else:
            return Response(status=status.HTTP_200_OK, data={"icon": "success", "message": f"E-mail no registrado"})
