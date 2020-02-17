""" from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name='main'),
] """

from rest_framework import routers
from .viewsets import mainItemSet, childItemSet, cathegorySet

router = routers.SimpleRouter()
router.register('parent', mainItemSet)
router.register('childItem', childItemSet)
router.register('cathegory', cathegorySet)

urlpatterns = router.urls