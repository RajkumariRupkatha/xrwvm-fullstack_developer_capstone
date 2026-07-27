from django.urls import path
from django.conf.urls.static import static
from django.conf import settings

from . import views


app_name = "djangoapp"

urlpatterns = [
    # Path for login
    path(route="login", view=views.login_user, name="login"),

    # Path for getting all car makes and models
    path(route="get_cars", view=views.get_cars, name="getcars"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)