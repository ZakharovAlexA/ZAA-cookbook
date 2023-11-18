from django.contrib import admin
from django.urls import path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from cookbook_api.views import CategoriesView, DishesView, DishView, DishesInCategoryView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='docs'),
    path('api/categories', CategoriesView.as_view()),
    path('api/dishes', DishesView.as_view()),
    path('api/dish/<int:id>', DishView.as_view()),
    path('api/dishes_in/', DishesInCategoryView.as_view()),
]
