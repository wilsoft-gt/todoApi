from rest_framework import serializers
from .models import mainItem, childItem, cathegory

class childItemSerializer(serializers.ModelSerializer):
    child_due_date = serializers.DateField(format="%Y-%m-%d")
    class Meta:
        model = childItem
        fields = "__all__"

class MainItemSerializer(serializers.ModelSerializer):
    childitem_set = childItemSerializer(many=True, read_only=True)


    class Meta:
        model = mainItem
        fields = ("id", "main_title", "main_description", "main_creation_date", "main_due_date", "main_cathegory", "childitem_set")

class CathegorySerializer(serializers.ModelSerializer):
    class Meta:
        model = cathegory
        fields = "__all__"