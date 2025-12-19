

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('department', models.CharField(max_length=255)),
                ('qualification', models.CharField(max_length=50)),
                ('max_credits', models.IntegerField(default=0)),
                ('assigned_hours', models.IntegerField(default=0)),
                ('preferred1', models.CharField(blank=True, max_length=255)),
                ('preferred2', models.CharField(blank=True, max_length=255)),
                ('preferred3', models.CharField(blank=True, max_length=255)),
                ('expertise_areas', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('code', models.CharField(max_length=50)),
                ('credit_hours', models.IntegerField()),
                ('department', models.CharField(max_length=255)),
                ('min_qualification', models.CharField(blank=True, max_length=50)),
                ('semester', models.CharField(blank=True, max_length=50)),
                ('match_score', models.IntegerField(default=0)),
                ('teacher', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='allocated_courses', to='api.teacher')),
            ],
        ),
    ]
