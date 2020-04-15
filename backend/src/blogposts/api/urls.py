from django.urls import path
from .views import BlogpostDetailView, BlogpostListView

urlpatterns = [
    path('', BlogpostListView.as_view()),
    path('<pk>', BlogpostDetailView.as_view())
]
