# Generated by Django 3.0.5 on 2020-04-15 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogposts', '0005_auto_20200415_1343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='./static/'),
        ),
    ]
