from django.urls import path

from .views import (

    PointsAPIView, PointsDetailAPIView, PointsByCategoryView
)


urlpatterns = [
    path('', PointsAPIView.as_view(), name='points'),
    path('detail/<uuid:pk>/', PointsDetailAPIView.as_view(), name='point_detail'),
    path('settings/', PointsByCategoryView.as_view()),
]
