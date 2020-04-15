from rest_framework.generics import (ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView)

from blogposts.models import Blogpost
from .serializers import BlogpostSerializer


class BlogpostListView(ListAPIView):
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer


class BlogpostDetailView(RetrieveAPIView):
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer

class BlogpostCreateView(CreateAPIView):
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer

class BlogpostUpdateView(UpdateAPIView):
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer

class BlogpostDeleteView(DestroyAPIView):
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer
