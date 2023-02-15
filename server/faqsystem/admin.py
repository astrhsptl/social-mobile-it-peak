from django.contrib import admin

from .models import FAQ

class FAQAdmin(admin.ModelAdmin):
    fields = (
        'id', 'title',  'discription', 'doc',
    )
    list_display = (
        'id', 'title',
    )
    list_editable = (
        'title', 
    )
    search_fields = (
        'id', 'title', 'discription',
    )
    readonly_fields = (
        'id',
    )

admin.site.register(FAQ, FAQAdmin)