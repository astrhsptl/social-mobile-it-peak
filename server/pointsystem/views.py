from django.db.models import Q
from rest_framework.generics import (
    ListCreateAPIView, RetrieveUpdateDestroyAPIView, 
    GenericAPIView, ListAPIView)

from .models import Category, Points
from .serializers import PointsSerializer, CategorySerializer


class CategoriesAPIView(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoriesDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PointsAPIView(ListCreateAPIView):
    queryset = Points.objects.all()
    serializer_class = PointsSerializer

class PointsDetailAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Points.objects.all()
    serializer_class = PointsSerializer

class PointsByCategoryView(ListAPIView):
    queryset = Points.objects.all()
    serializer_class = PointsSerializer

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)        
    
    def get_queryset(self, *args):
        return self.queryset.filter(Q(category_id=self.request.query_params['category_id']))