from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Teacher, Course, Allocation
from .serializers import TeacherSerializer, CourseSerializer, AllocationSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class AllocationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Allocation.objects.all()
    serializer_class = AllocationSerializer

class GenerateScheduleView(APIView):
    def post(self, request):
        teachers = list(Teacher.objects.all())
        courses = list(Course.objects.all())
        
        Allocation.objects.all().delete()
        
        for t in teachers:
            t.assigned_hours = 0
            t.save()
            
        for c in courses:
            c.teacher = None
            c.match_score = 0
            c.save()
            
        courses.sort(key=lambda x: (-x.credit_hours, x.id))
        qual_rank = {"BSc": 1, "MSc": 2, "PhD": 3, "PostDoc": 4}
        
        allocations_list = []
        unassigned = []
        
        for course in courses:
            potential_teachers = []
            for teacher in teachers:
                if teacher.assigned_hours + course.credit_hours > teacher.max_credits:
                    continue
                
                score = 0
                if teacher.department == course.department:
                    score += 5
                if course.name in [teacher.preferred1, teacher.preferred2, teacher.preferred3]:
                    score += 3
                
                areas = [a.strip().lower() for a in teacher.expertise_areas.split(",") if a.strip()]
                c_name = course.name.lower()
                c_code = course.code.lower()
                if any(area in c_name or area in c_code for area in areas):
                    score += 4
                    
                req_rank = qual_rank.get(course.min_qualification, 1)
                teach_rank = qual_rank.get(teacher.qualification, 1)
                
                if teach_rank < req_rank:
                    continue
                    
                if teach_rank >= req_rank:
                    score += 2
                
                if score > 0 or teacher.department == course.department:
                    final_score = score if score > 0 else 1
                    potential_teachers.append({
                        'teacher': teacher,
                        'score': final_score,
                        'load': teacher.assigned_hours
                    })
            
            if potential_teachers:
                potential_teachers.sort(key=lambda x: (-x['score'], x['load']))
                best = potential_teachers[0]
                
                best_teacher = best['teacher']
                course.teacher = best_teacher
                course.match_score = best['score']
                course.save()
                
                best_teacher.assigned_hours += course.credit_hours
                best_teacher.save()

                Allocation.objects.create(
                    teacher=best_teacher,
                    course=course,
                    match_score=best['score']
                )
                
                allocations_list.append({
                    "course": course.name,
                    "teacher": best_teacher.name,
                    "score": best['score']
                })
            else:
                unassigned.append(course.name)
        
        return Response({
            "status": "success",
            "allocated": len(allocations_list),
            "unassigned": len(unassigned),
            "unassigned_courses": unassigned
        })
