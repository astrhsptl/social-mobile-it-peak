from django.urls import path

from .views import (
    CategoriesAPIView, CategoriesDetailAPIView,
)


urlpatterns = [
    path('', CategoriesAPIView.as_view(), name='categories'),
    path('<uuid:pk>/', CategoriesDetailAPIView.as_view(), name='category_detail'),
]
