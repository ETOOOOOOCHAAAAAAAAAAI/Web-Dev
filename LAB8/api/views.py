from django.http import JsonResponse
from .models import Product, Category


def product_list(request):
  products = list(Product.objects.values())
  return JsonResponse(products, safe=False)


def product_detail(request, id):
  products = Product.objects.filter(id=id).values()
  return JsonResponse(list(products), safe=False)


def categories_list(request):
  categories = list(Category.objects.values())
  return JsonResponse(categories, safe=False)


def category_detail(request, id):
  categories = Category.objects.filter(id=id).values()
  return JsonResponse(list(categories), safe=False)


def category_products(request, id):
    products = list(Product.objects.filter(category_id=id).values())
    return JsonResponse(products, safe=False)

