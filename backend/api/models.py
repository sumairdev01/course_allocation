from django.db import models

class Teacher(models.Model):
    name = models.CharField(max_length=255)
    department = models.CharField(max_length=255)
    qualification = models.CharField(max_length=50)
    max_credits = models.IntegerField(default=0)
    assigned_hours = models.IntegerField(default=0)
    preferred1 = models.CharField(max_length=255, blank=True)
    preferred2 = models.CharField(max_length=255, blank=True)
    preferred3 = models.CharField(max_length=255, blank=True)
    expertise_areas = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Course(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=50)
    credit_hours = models.IntegerField()
    department = models.CharField(max_length=255)
    min_qualification = models.CharField(max_length=50, blank=True)
    semester = models.CharField(max_length=50, blank=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, blank=True, related_name='allocated_courses')
    match_score = models.IntegerField(default=0)
    
    def __str__(self):
        return f"{self.code} - {self.name}"

class Allocation(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='allocations')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='allocations')
    match_score = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.teacher.name} -> {self.course.name}"
