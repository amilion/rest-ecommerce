# Generated by Django 4.0.6 on 2022-09-13 22:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0002_alter_product_sku'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Commment',
            new_name='Comment',
        ),
        migrations.CreateModel(
            name='ProductPack',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_time', models.DateTimeField(auto_now_add=True)),
                ('updated_time', models.DateTimeField(auto_now=True)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='paks', to='products.product')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
