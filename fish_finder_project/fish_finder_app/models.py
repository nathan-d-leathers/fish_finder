from django.db import models
from django.contrib.auth.models import AbstractUser 


class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    zipcode = models.PositiveIntegerField()
    state = models.CharField(max_length=2)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []