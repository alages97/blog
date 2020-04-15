from rest_framework.generics import ListAPIView, RetrieveAPIView

from blogposts.models import Blogpost
from .serializers import BlogpostSerializer


class BlogpostListView(ListAPIView):
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer


class BlogpostDetailView(RetrieveAPIView):
    queryset = Blogpost.objects.all()
    serializer_class = BlogpostSerializer
