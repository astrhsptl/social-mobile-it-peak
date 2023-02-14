import uuid

from django.db import models

from django.urls import reverse_lazy

# Create your models here.


class Category(models.Model):   
    title = models.CharField(max_length=256)
    description = models.CharField(max_length=2048)

    class Meta:
        verbose_name = ("Категория")
        verbose_name_plural = ("Категории")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse_lazy("category_detail", kwargs={"pk": self.pk})


class Points(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid.uuid4,
        editable=False,
        verbose_name='id',)
    title = models.CharField(max_length=256)
    discription = models.CharField(max_length=4096)
    category = models.ForeignKey(Category, models.CASCADE)
    address = models.CharField(max_length=128)
    image = models.ImageField(upload_to='points/%Y/%m/%d/', null=True)
    longitude = models.FloatField()
    latitude = models.FloatField()


    class Meta:
        verbose_name = ("Пункт")
        verbose_name_plural = ("Пункты")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse_lazy("point_detail", kwargs={"pk": self.id})
