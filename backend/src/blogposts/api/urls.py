from django.urls import path
from .views import (BlogpostDetailView, BlogpostListView, BlogpostCreateView,BlogpostUpdateView,BlogpostDeleteView)

urlpatterns = [
    path('', BlogpostListView.as_view()),
    path('create/', BlogpostCreateView.as_view()),
    path('<pk>', BlogpostDetailView.as_view()),
    path('<pk>/update', BlogpostUpdateView.as_view()),
    path('<pk>/delete', BlogpostDeleteView.as_view())
]
