# Third-party package imports
from rest_framework_simplejwt.views import TokenObtainPairView
# .files import
from users.api.v1.serializers import MyTokenObtainPairSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer