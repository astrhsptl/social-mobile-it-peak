import uuid
from django.db import models
from django.urls import reverse_lazy


class FAQ(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid.uuid4,
        editable=False,
        verbose_name='id',)
    title = models.CharField(max_length=256)
    discription = models.CharField(max_length=1024)
    doc = models.FileField(upload_to='faq/docs/', null=True)

    class Meta:
        verbose_name = ("FAQ")
        verbose_name_plural = ("FAQs")
        
    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse_lazy("faq_detail", kwargs={"pk": self.id})