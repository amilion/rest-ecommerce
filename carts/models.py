import secrets

from django.db import models
from datetimemixin.models import DateTimeMixin
from django.contrib.auth import get_user_model
from productpacks.models import ProductPack
from extra_fields.models import ExtraFieldValue, ExtraFieldName

User = get_user_model()


class Cart(DateTimeMixin):
    user = models.OneToOneField(
        User,
        related_name='cart',
        on_delete=models.CASCADE
    )

    sku = models.CharField(
        max_length=255,
        blank=True,
        unique=True
    )

    def save(self, *args, **kwargs):
        if not self.sku:
            self.sku = secrets.token_urlsafe(nbytes=12)
        return super(Cart, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.user}'s cart"


class CartItem(DateTimeMixin):
    cart = models.ForeignKey(
        Cart,
        on_delete=models.CASCADE,
        blank=False,
        related_name='items'
    )
    item = models.ForeignKey(
        ProductPack,
        on_delete=models.CASCADE,
        blank=False,
        related_name='cart_items'
    )
    quantity = models.PositiveIntegerField(
        blank=False,
        default=0
    )
    sku = models.CharField(
        max_length=255,
        blank=True,
        unique=True
    )

    class Meta:
        unique_together = ('cart', 'item')

    def save(self, *args, **kwargs):
        if not self.sku:
            self.sku = secrets.token_urlsafe(nbytes=12)
        return super(CartItem, self).save(*args, **kwargs)

    def __str__(self):
        return self.item









