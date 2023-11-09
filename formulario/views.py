from django.views.generic import TemplateView
from .models import Alumno
# from .models import Materia


# Create your views here.
class Index(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context_index = {
            'title': 'Test Abraham',
            'h1': 'Lista de Alumnos Registrados',
            'alumnos': Alumno.objects.all()
            # 'materias': Materia.objects.all()
        }

        return context_index
