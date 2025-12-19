from django.core.management.base import BaseCommand
from api.models import Teacher, Course

class Command(BaseCommand):
    help = 'Seeds the database with sample teachers and courses'

    def handle(self, *args, **kwargs):
        self.stdout.write('Seeding database...')
        
        Teacher.objects.all().delete()
        Course.objects.all().delete()
        
        self.stdout.write('Creating teachers...')
        teachers_data = [
            {
                'name': 'Dr. Ahmed Khan',
                'department': 'Computer Science',
                'qualification': 'PhD',
                'max_credits': 12,
                'preferred1': 'Data Structures',
                'preferred2': 'Algorithms',
                'preferred3': 'Database Systems',
                'expertise_areas': 'Data Structures, Algorithms, Database Systems, Machine Learning'
            },
            {
                'name': 'Dr. Sarah Ali',
                'department': 'Computer Science',
                'qualification': 'PhD',
                'max_credits': 12,
                'preferred1': 'Operating Systems',
                'preferred2': 'Computer Networks',
                'preferred3': 'Distributed Systems',
                'expertise_areas': 'Operating Systems, Computer Networks, Distributed Systems, Cloud Computing'
            },
            {
                'name': 'Prof. Muhammad Hassan',
                'department': 'Computer Science',
                'qualification': 'PostDoc',
                'max_credits': 9,
                'preferred1': 'Artificial Intelligence',
                'preferred2': 'Machine Learning',
                'preferred3': 'Deep Learning',
                'expertise_areas': 'Artificial Intelligence, Machine Learning, Deep Learning, Neural Networks'
            },
            {
                'name': 'Dr. Fatima Noor',
                'department': 'Software Engineering',
                'qualification': 'PhD',
                'max_credits': 12,
                'preferred1': 'Software Engineering',
                'preferred2': 'Software Design',
                'preferred3': 'Software Testing',
                'expertise_areas': 'Software Engineering, Software Design, Agile Development, DevOps'
            },
            {
                'name': 'Mr. Usman Tariq',
                'department': 'Computer Science',
                'qualification': 'MSc',
                'max_credits': 15,
                'preferred1': 'Web Development',
                'preferred2': 'Mobile Development',
                'preferred3': 'Programming Fundamentals',
                'expertise_areas': 'Web Development, Mobile Development, JavaScript, React, Python'
            },
            {
                'name': 'Dr. Ayesha Malik',
                'department': 'Data Science',
                'qualification': 'PhD',
                'max_credits': 12,
                'preferred1': 'Data Mining',
                'preferred2': 'Big Data',
                'preferred3': 'Data Analytics',
                'expertise_areas': 'Data Mining, Big Data, Data Analytics, Statistical Analysis'
            },
            {
                'name': 'Prof. Imran Siddiqui',
                'department': 'Computer Science',
                'qualification': 'PostDoc',
                'max_credits': 9,
                'preferred1': 'Computer Architecture',
                'preferred2': 'Digital Logic Design',
                'preferred3': 'Microprocessors',
                'expertise_areas': 'Computer Architecture, Digital Logic Design, Embedded Systems'
            },
            {
                'name': 'Dr. Zainab Ahmed',
                'department': 'Information Security',
                'qualification': 'PhD',
                'max_credits': 12,
                'preferred1': 'Cybersecurity',
                'preferred2': 'Network Security',
                'preferred3': 'Cryptography',
                'expertise_areas': 'Cybersecurity, Network Security, Cryptography, Ethical Hacking'
            },
            {
                'name': 'Mr. Ali Raza',
                'department': 'Computer Science',
                'qualification': 'MSc',
                'max_credits': 15,
                'preferred1': 'Programming Fundamentals',
                'preferred2': 'Object Oriented Programming',
                'preferred3': 'Data Structures',
                'expertise_areas': 'Programming Fundamentals, OOP, C++, Java, Python'
            },
            {
                'name': 'Dr. Hina Shahid',
                'department': 'Computer Science',
                'qualification': 'PhD',
                'max_credits': 12,
                'preferred1': 'Human Computer Interaction',
                'preferred2': 'UI/UX Design',
                'preferred3': 'Web Development',
                'expertise_areas': 'HCI, UI/UX Design, User Research, Web Technologies'
            }
        ]
        
        teachers = []
        for teacher_data in teachers_data:
            teacher = Teacher.objects.create(**teacher_data)
            teachers.append(teacher)
            self.stdout.write(f'  Created teacher: {teacher.name}')
        
        self.stdout.write('Creating courses...')
        courses_data = [
            {
                'name': 'Programming Fundamentals',
                'code': 'CS101',
                'credit_hours': 3,
                'department': 'Computer Science',
                'min_qualification': 'MSc',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Object Oriented Programming',
                'code': 'CS102',
                'credit_hours': 3,
                'department': 'Computer Science',
                'min_qualification': 'MSc',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Data Structures',
                'code': 'CS201',
                'credit_hours': 4,
                'department': 'Computer Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Algorithms',
                'code': 'CS202',
                'credit_hours': 4,
                'department': 'Computer Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Database Systems',
                'code': 'CS301',
                'credit_hours': 3,
                'department': 'Computer Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Operating Systems',
                'code': 'CS302',
                'credit_hours': 4,
                'department': 'Computer Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Computer Networks',
                'code': 'CS303',
                'credit_hours': 3,
                'department': 'Computer Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Software Engineering',
                'code': 'SE401',
                'credit_hours': 3,
                'department': 'Software Engineering',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Artificial Intelligence',
                'code': 'CS501',
                'credit_hours': 3,
                'department': 'Computer Science',
                'min_qualification': 'PostDoc',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Machine Learning',
                'code': 'CS502',
                'credit_hours': 4,
                'department': 'Computer Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Web Development',
                'code': 'CS304',
                'credit_hours': 3,
                'department': 'Computer Science',
                'min_qualification': 'MSc',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Mobile Application Development',
                'code': 'CS305',
                'credit_hours': 3,
                'department': 'Computer Science',
                'min_qualification': 'MSc',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Data Mining',
                'code': 'DS401',
                'credit_hours': 3,
                'department': 'Data Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Big Data Analytics',
                'code': 'DS402',
                'credit_hours': 4,
                'department': 'Data Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Cybersecurity',
                'code': 'IS501',
                'credit_hours': 3,
                'department': 'Information Security',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Network Security',
                'code': 'IS502',
                'credit_hours': 3,
                'department': 'Information Security',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Computer Architecture',
                'code': 'CS203',
                'credit_hours': 4,
                'department': 'Computer Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Digital Logic Design',
                'code': 'CS103',
                'credit_hours': 3,
                'department': 'Computer Science',
                'min_qualification': 'MSc',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Human Computer Interaction',
                'code': 'CS306',
                'credit_hours': 3,
                'department': 'Computer Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            },
            {
                'name': 'Distributed Systems',
                'code': 'CS503',
                'credit_hours': 4,
                'department': 'Computer Science',
                'min_qualification': 'PhD',
                'semester': 'Fall 2025'
            }
        ]
        
        courses = []
        for course_data in courses_data:
            course = Course.objects.create(**course_data)
            courses.append(course)
            self.stdout.write(f'  Created course: {course.code} - {course.name}')
        
        self.stdout.write(self.style.SUCCESS(f'\nSuccessfully seeded database!'))
        self.stdout.write(self.style.SUCCESS(f'Created {len(teachers)} teachers'))
        self.stdout.write(self.style.SUCCESS(f'Created {len(courses)} courses'))
        
        self.stdout.write('\nGenerating course allocations...')
        self.allocate_courses(teachers, courses)
    
    def allocate_courses(self, teachers, courses):
        for t in teachers:
            t.assigned_hours = 0
            
        for c in courses:
            c.teacher = None
            c.match_score = 0
        
        courses.sort(key=lambda x: (-x.credit_hours, x.id))
        
        qual_rank = {"BSc": 1, "MSc": 2, "PhD": 3, "PostDoc": 4}
        
        allocations = []
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
                
                allocations.append({
                    "course": course.name,
                    "teacher": best_teacher.name,
                    "score": best['score']
                })
                
                self.stdout.write(f'  ✓ {course.code} → {best_teacher.name} (Score: {best["score"]})')
            else:
                unassigned.append(course.name)
                self.stdout.write(self.style.WARNING(f'  ✗ {course.code} - No suitable teacher found'))
        
        for t in teachers:
            t.save()
        
        self.stdout.write(self.style.SUCCESS(f'\n✓ Allocation complete!'))
        self.stdout.write(self.style.SUCCESS(f'Allocated: {len(allocations)} courses'))
        if unassigned:
            self.stdout.write(self.style.WARNING(f'Unassigned: {len(unassigned)} courses'))
