from django.urls import path, include

from .views import (
    CategoriesAPIView, CategoriesDetailAPIView,

    PointsAPIView, PointsDetailAPIView, PointsByCategoryView
)


urlpatterns = [
    path('categories/', include('pointsystem.category_urls')),
    path('points/', include('pointsystem.points_urls')),
]