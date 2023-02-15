from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from .models import FAQ
from .serializers import FAQSerilizer

class FAQAPIView(ListCreateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerilizer

class FAQDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerilizer