from django.contrib import admin
from .models import Teacher, Course

@admin.register(Teacher)
class TeacherAdmin(admin.ModelAdmin):
    list_display = ('name', 'department', 'qualification', 'max_credits', 'assigned_hours')
    search_fields = ('name', 'department')

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('code', 'name', 'department', 'credit_hours', 'teacher', 'match_score')
    list_filter = ('department', 'teacher')
    search_fields = ('name', 'code')
