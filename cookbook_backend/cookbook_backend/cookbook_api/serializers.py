from rest_framework import serializers
from .models import Category, Dishes


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class DishesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dishes
        fields = ('id', 'name', 'ingredients', 'method', 'category')
