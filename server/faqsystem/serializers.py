from rest_framework import serializers

from .models import FAQ

class FAQSerilizer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'
   
    def validate(self, data):
        content = data.get("content", None)
        request = self.context['request']

        if not request.FILES and not content:
            raise serializers.ValidationError("Content or an Image must be provided")
        return data