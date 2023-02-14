from django.contrib import admin

from .models import Category, Points

class PointsAdmin(admin.ModelAdmin):
    fields = (
        'id', 'title',  'discription',
        'category', 'address', 'longitude', 'latitude',
    )
    list_display = (
        'id', 'title',
        'category', 'address', 'longitude', 'latitude',
    )
    list_editable = (
        'title', 'category', 
    )
    search_fields = (
        'id', 'title',
        'category', 'address', 'longitude', 'latitude',
    )
    readonly_fields = (
        'id',
    )



class CategoryAdmin(admin.ModelAdmin):
    fields = (
        'id', 'title',  'description',
    )
    list_display = (
        'id', 'title',
    )
    list_editable = (
        'title', 
    )
    search_fields = (
        'id', 'title', 'description',
    )
    readonly_fields = (
        'id',
    )


admin.site.register(Points, PointsAdmin)
admin.site.register(Category, CategoryAdmin)