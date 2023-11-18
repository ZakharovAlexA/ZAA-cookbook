from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Category, Dishes
from .serializers import CategoriesSerializer, DishesSerializer


class CategoriesView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoriesSerializer


class DishesView(ListAPIView):
    queryset = Dishes.objects.all()
    serializer_class = DishesSerializer


class DishView(RetrieveAPIView):
    queryset = Dishes.objects.all()
    serializer_class = DishesSerializer
    lookup_field = 'id'


class DishesInCategoryView(ListAPIView):
    queryset = Dishes.objects.all()
    serializer_class = DishesSerializer
    lookup_field = 'category'
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category']
