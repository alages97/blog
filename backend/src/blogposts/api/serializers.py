from rest_framework import serializers

from blogposts.models import Blogpost


class BlogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogpost
        fields = ('title', 'content', 'created_at', 'updated_at')
