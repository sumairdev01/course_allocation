import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi";
import * as XLSX from "xlsx";
import {
  PageContainer,
  HeaderBar,
  HeaderTitle,
  AddButton,
  ModalOverlay,
  ModalContent,
  CloseButton,
  Form,
  FormRow,
  Label,
  Input,
  Select,
  SubmitButton,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
} from "./style";

import { getCourses, addCourse, updateCourse, deleteCourse } from "../../../services/api";

const ManageCourses = () => {
  const [showModal, setShowModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [editId, setEditId] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const departments = [
    "Computer Science",
    "Software Engineering",
    "Information Technology",
    "Mathematics"
  ];

  const fetchCourses = async () => {
    try {
      const res = await getCourses();
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const onSubmit = async (data) => {
    try {
      const courseData = {
        name: data.name,
        code: data.code,
        credit_hours: Number(data.hours),
        department: data.department,
        min_qualification: data.minQualification || "BSc",
        semester: data.semester || "1st"
      };

      if (editId) {
        await updateCourse(editId, courseData);
      } else {
        await addCourse(courseData);
      }
      setShowModal(false);
      reset();
      setEditId(null);
      fetchCourses();
    } catch (error) {
      console.error("Error saving course:", error);
      alert("Failed to save course");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete course?")) return;
    try {
      await deleteCourse(id);
      fetchCourses();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleEdit = (course) => {
    setShowModal(true);
    setEditId(course.id);
    setValue("name", course.name);
    setValue("code", course.code);
    setValue("hours", course.credit_hours);
    setValue("department", course.department);
    setValue("minQualification", course.min_qualification);
    setValue("semester", course.semester);
  };

  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      uploadCourses(data);
    };
    reader.readAsBinaryString(file);
  };

  const uploadCourses = async (data) => {
    for (let item of data) {
      try {
        await addCourse({
          name: item.name,
          code: item.code,
          credit_hours: item.hours || 3,
          department: item.department || "CS",
          min_qualification: item.minQualification,
          semester: item.semester
        });
      } catch (e) { console.error(e); }
    }
    fetchCourses();
    alert("Upload complete");
  }

  return (
    <PageContainer>
      <HeaderBar>
        <HeaderTitle>Manage Courses</HeaderTitle>
      </HeaderBar>

      <AddButton onClick={() => { reset(); setEditId(null); setShowModal(true); }}>
        + Add Course
      </AddButton>
      <AddButton as="label" style={{ marginLeft: "10px", cursor: "pointer" }}>
        + Upload Excel
        <input type="file" accept=".xlsx,.csv" style={{ display: "none" }} onChange={handleExcelUpload} />
      </AddButton>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setShowModal(false)}><FiX size={22} /></CloseButton>
            <h2>{editId ? "Edit Course" : "Add Course"}</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormRow>
                <Label>Course Name</Label>
                <Input {...register("name", { required: true })} placeholder="Course Name" />
              </FormRow>
              <FormRow>
                <Label>Course Code</Label>
                <Input {...register("code", { required: true })} placeholder="e.g. CS-101" />
              </FormRow>
              <FormRow>
                <Label>Credit Hours</Label>
                <Input type="number" {...register("hours", { required: true })} />
              </FormRow>
              <FormRow>
                <Label>Department</Label>
                <Select {...register("department", { required: true })}>
                  <option value="">Select Department</option>
                  {departments.map(d => <option key={d} value={d}>{d}</option>)}
                </Select>
              </FormRow>
              <FormRow>
                <Label>Min Qualification</Label>
                <Select {...register("minQualification", { required: true })}>
                  <option value="BSc">BSc</option>
                  <option value="MSc">MSc</option>
                  <option value="PhD">PhD</option>
                </Select>
              </FormRow>
              <FormRow>
                <Label>Semester</Label>
                <Input {...register("semester")} placeholder="e.g. 1st" />
              </FormRow>
              <SubmitButton type="submit">{editId ? "Update" : "Add"}</SubmitButton>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}

      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Code</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Department</TableHeader>
              <TableHeader>Hours</TableHeader>
              <TableHeader>Min Qual</TableHeader>
              <TableHeader>Semester</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {courses.length > 0 ? courses.map(c => (
              <TableRow key={c.id}>
                <TableData>{c.code}</TableData>
                <TableData>{c.name}</TableData>
                <TableData>{c.department}</TableData>
                <TableData>{c.credit_hours}</TableData>
                <TableData>{c.min_qualification}</TableData>
                <TableData>{c.semester}</TableData>
                <TableData>
                  <button className="edit-btn" onClick={() => handleEdit(c)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(c.id)}>Delete</button>
                </TableData>
              </TableRow>
            )) : <TableRow><TableData colSpan="7">No courses found</TableData></TableRow>}
          </tbody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default ManageCourses;