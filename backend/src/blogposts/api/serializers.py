from rest_framework import serializers

from blogposts.models import Blogpost


class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = ('id','title','description', 'content', 'created_at', 'updated_at', 'image')
