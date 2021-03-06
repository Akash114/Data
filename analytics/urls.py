from django.urls import path,include
from . import views
from django.conf.urls import url


urlpatterns = [
    path('',views.home,name='home'),
    url('columns',views.get_columns,name='columns'),
    url('visualize',views.visualize,name='visualize'),
    url('two_variables',views.two_variables,name='two_variables'),
    url('menu',views.menu,name='menu'),
    url(r'^logout/$', views.logout_view, name='logout'),
    url('preview',views.preview_link,name="preview")

]
