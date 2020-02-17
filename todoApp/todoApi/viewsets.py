from rest_framework import viewsets
from .models import mainItem, childItem, cathegory

from .serializer import MainItemSerializer, childItemSerializer, CathegorySerializer


class mainItemSet(viewsets.ModelViewSet):
    queryset = mainItem.objects.all()
    serializer_class = MainItemSerializer

class childItemSet(viewsets.ModelViewSet):
    queryset = childItem.objects.all()
    serializer_class = childItemSerializer

class cathegorySet(viewsets.ModelViewSet):
    queryset = cathegory.objects.all()
    serializer_class = CathegorySerializer