from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Dishes(models.Model):
    name = models.CharField(max_length=255)
    ingredients = models.TextField(default="Ингредиенты не указаны")
    method = models.TextField(default="Способ приготовления не указан")
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
