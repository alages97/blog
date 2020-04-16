from django.db import models

class Blogpost(models.Model):
    title = models.CharField(max_length=120)
    description = models.CharField(max_length = 250)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(blank = True, null = True)

    def __str__(self):
        return self.title

