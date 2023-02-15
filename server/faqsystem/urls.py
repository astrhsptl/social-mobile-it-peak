from django.urls import path

from .views import FAQAPIView, FAQDetailAPIView

urlpatterns = [
    path('', FAQAPIView.as_view(), name='faqs'),
    path('<uuid:pk>/', FAQDetailAPIView.as_view(), name='faq_detail'),
]
