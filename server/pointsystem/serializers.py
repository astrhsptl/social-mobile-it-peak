from rest_framework import serializers

from .models import (
    Category, Points
)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class PointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Points
        fields = '__all__'