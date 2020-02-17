from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import mainItem

# Create your views here.

def main(request):
    data = mainItem.objects.all()
    return render(request, "todoApi/main.html", {"data": data})