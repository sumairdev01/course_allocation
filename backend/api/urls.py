from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeacherViewSet, CourseViewSet, AllocationViewSet, GenerateScheduleView

router = DefaultRouter()
router.register(r'teachers', TeacherViewSet)
router.register(r'courses', CourseViewSet)
router.register(r'allocations', AllocationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('generate-schedule/', GenerateScheduleView.as_view(), name='generate-schedule'),
]
