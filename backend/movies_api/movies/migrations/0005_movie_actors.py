# Generated by Django 5.0.4 on 2024-06-23 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('actors', '0001_initial'),
        ('movies', '0004_movie_director'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='actors',
            field=models.ManyToManyField(related_name='movies', to='actors.actor'),
        ),
    ]
