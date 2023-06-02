from django.urls import path
from rest_framework.routers import DefaultRouter

from api.views import CompanyViewSet, AdvocateViewSet, CompanyRelationshipView, AdvocateRelationshipView

router = DefaultRouter()
router.register('companies', CompanyViewSet)
router.register('advocates', AdvocateViewSet)


urlpatterns = [
    path(
        'company/<pk>/relationships/<related_field>/',
        view=CompanyRelationshipView.as_view(),
        name='company-relationships'
    ),
    path(
        'company/<pk>/<related_field>/',
        view=CompanyViewSet.as_view({'get': 'retrieve_related'}),
        name='company-related'
    ),
    
    
    path(
        'advocate/<pk>/relationships/<related_field>/',
        view=AdvocateRelationshipView.as_view(),
        name='advocate-relationships'
    ),
    path(
        'advocate/<pk>/<related_field>/',
        view=AdvocateViewSet.as_view({'get': 'retrieve_related'}),
        name='advocate-related'
    )
]

urlpatterns += router.urls

