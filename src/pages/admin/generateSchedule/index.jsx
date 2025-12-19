import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import {
  PageContainer,
  HeaderBar,
  HeaderTitle,
  GenerateButton,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
  CourseBox,
  ActionContainer,
  DownloadButton,
} from "./style";

import { generateSchedule, getTeachers, getCourses } from "../../../services/api";

const GenerateSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAndConstructSchedule();
  }, []);

  const totalCreditHours = (courses) =>
    courses.reduce((sum, c) => sum + (c.credit_hours || 0), 0);

  const handleGenerate = async () => {
    setLoading(true);
    setSchedule([]);

    try {
      const result = await generateSchedule();
      console.log("Generation Result:", result.data);

      await fetchAndConstructSchedule();
    } catch (error) {
      console.error("Layout generation failed:", error);
      alert("Generation failed. Is Django running?");
    }
    setLoading(false);
  };

  const fetchAndConstructSchedule = async () => {
    try {
      const tRes = await getTeachers();
      const cRes = await getCourses();

      const teachers = tRes.data;
      const courses = cRes.data;

      const teacherMap = {};
      teachers.forEach(t => {
        teacherMap[t.name] = {
          ...t,
          teacherName: t.name,
          maxCreditHour: t.max_credits,
          assignedCourses: []
        };
      });

      const unassigned = [];

      courses.forEach(c => {
        const uiCourse = {
          ...c,
          hours: c.credit_hours,
          matchScore: c.match_score
        };

        if (c.teacher_name && teacherMap[c.teacher_name]) {
          teacherMap[c.teacher_name].assignedCourses.push(uiCourse);
        } else {
          unassigned.push(uiCourse);
        }
      });

      const finalSchedule = Object.values(teacherMap);
      if (unassigned.length > 0) {
        finalSchedule.push({
          teacherName: "UNASSIGNED COURSES",
          maxCreditHour: 0,
          assignedCourses: unassigned
        });
      }

      setSchedule(finalSchedule);

    } catch (e) {
      console.error("Error fetching schedule data:", e);
    }
  };

  const downloadExcel = () => {
    const wb = XLSX.utils.book_new();
    const wsData = [];
    schedule.forEach(teacher => {
      teacher.assignedCourses.forEach(course => {
        wsData.push({
          Teacher: teacher.teacherName,
          "Course Name": course.name,
          "Course Code": course.code,
          "Credit Hours": course.hours,
          Semester: course.semester || "N/A",
          Note: teacher.teacherName === "UNASSIGNED COURSES" ? "Unassigned" : ""
        });
      });
    });
    const ws = XLSX.utils.json_to_sheet(wsData);
    XLSX.utils.book_append_sheet(wb, ws, "Schedule");
    XLSX.writeFile(wb, "Teacher_Schedule.xlsx");
  };

  const downloadPDF = () => {
    const docPDF = new jsPDF();
    const tableData = [];
    schedule.forEach(teacher => {
      teacher.assignedCourses.forEach(course => {
        tableData.push([
          teacher.teacherName,
          course.name,
          course.code,
          course.hours,
          course.semester || "N/A",
          teacher.teacherName === "UNASSIGNED COURSES" ? "Unassigned" : ""
        ]);
      });
    });
    autoTable(docPDF, {
      head: [["Teacher", "Course Name", "Code", "Credit Hours", "Semester", "Note"]],
      body: tableData
    });
    docPDF.save("Teacher_Schedule.pdf");
  };

  return (
    <PageContainer>
      <HeaderBar>
        <HeaderTitle>Generate Schedule</HeaderTitle>
      </HeaderBar>

      <GenerateButton onClick={handleGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Allocation"}
      </GenerateButton>

      {schedule.length > 0 && (
        <>
          <TableContainer className="card">
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Teacher</TableHeader>
                  <TableHeader>Assigned Courses</TableHeader>
                  <TableHeader>Total Credit Hours</TableHeader>
                  <TableHeader>Max Available</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {schedule.map((teacher, i) => {
                  const totalHours = totalCreditHours(teacher.assignedCourses);
                  const isUnassigned = teacher.teacherName === "UNASSIGNED COURSES";
                  return (
                    <TableRow key={i} style={{ backgroundColor: isUnassigned ? '#ffe6e6' : 'inherit' }}>
                      <TableData style={{ fontWeight: isUnassigned ? 'bold' : 'normal', color: isUnassigned ? 'red' : 'inherit' }}>
                        {teacher.teacherName}
                      </TableData>
                      <TableData>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                          {teacher.assignedCourses.map((course, index) => (
                            <CourseBox
                              key={index}
                              style={{
                                border: (course.matchScore < 5 && !isUnassigned) ? '2px solid red' : 'none',
                                backgroundColor: (course.matchScore < 5 && !isUnassigned) ? '#fff3b0' : 'inherit'
                              }}
                            >
                              <h4>{course.name}</h4>
                              <p><strong>Code:</strong> {course.code}</p>
                              <p><strong>Hours:</strong> {course.hours}</p>
                              <p><strong>Semester:</strong> {course.semester || "N/A"}</p>
                            </CourseBox>
                          ))}
                        </div>
                      </TableData>
                      <TableData>
                        <strong style={{ color: isUnassigned ? 'red' : 'green' }}>{totalHours}</strong>
                      </TableData>
                      <TableData>
                        <strong>{teacher.maxCreditHour}</strong>
                      </TableData>
                    </TableRow>
                  );
                })}
              </tbody>
            </Table>
          </TableContainer>

          <ActionContainer>
            <GenerateButton onClick={handleGenerate}>Regenerate</GenerateButton>
            <DownloadButton onClick={downloadExcel}>Download Excel</DownloadButton>
            <DownloadButton onClick={downloadPDF}>Download PDF</DownloadButton>
          </ActionContainer>
        </>
      )}
    </PageContainer>
  );
};

export default GenerateSchedule;