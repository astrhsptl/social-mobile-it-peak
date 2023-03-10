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
   
    def validate(self, data):
        content = data.get("content", None)
        request = self.context['request']
        # you dont need to set content explicitly to None

        if not request.FILES and not content:
            raise serializers.ValidationError("Content or an Image must be provided")
        return data