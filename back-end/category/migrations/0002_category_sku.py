# Generated by Django 4.0.6 on 2023-08-06 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='sku',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
