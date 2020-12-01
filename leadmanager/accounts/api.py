from rest_framework import generics, permissions 
from .serializers import RegisterSerializer , UserSerializer,LoginSerializer
from rest_framework.response import Response 
from knox.models import AuthToken

# { get_serializer_context() => 'request': <rest_framework.request.Request: POST '/api/auth/register'>, 'format': None, 'view': <accounts.api.RegisterAPI object at 0x000001F7030C8D30>}

#Register api
class RegisterAPI(generics.GenericAPIView):
	serializer_class = RegisterSerializer

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		token = AuthToken.objects.create(user)[1]
		print(self.get_serializer_context())
		return Response({
			"user": UserSerializer(user, 
				context=self.get_serializer_context()).data,
			"token": token
			})

#Login api 
class LoginAPI(generics.GenericAPIView):
	serializer_class = LoginSerializer 

	def post(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.validated_data
		token = AuthToken.objects.create(user)[1]
		return Response({
			"user": UserSerializer(user, context=self.get_serializer_context()).data ,
			"token": token
			})

#Get user api
class UserAPI(generics.RetrieveAPIView):
	permission_classes = [
	permissions.IsAuthenticated,
	]
	serializer_class = UserSerializer 

	# get_object === get-detail(retrieve) CRUD operation eg: user/2/ 
	# lookup field is inbuilt
	def get_object(self):
		return self.request.user