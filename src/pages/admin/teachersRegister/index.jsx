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

import { getTeachers, addTeacher, updateTeacher, deleteTeacher, getCourses } from "../../../services/api";

const ManageTeachers = () => {
  const [showModal, setShowModal] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [departments] = useState([
    { id: "CS", name: "Computer Science" },
    { id: "SE", name: "Software Engineering" },
    { id: "IT", name: "Information Technology" },
    { id: "Math", name: "Mathematics" }
  ]);
  const [editId, setEditId] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const fetchTeachers = async () => {
    try {
      const response = await getTeachers();
      setTeachers(response.data);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await getCourses();
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchTeachers();
    fetchCourses();
  }, []);

  const onSubmit = async (data) => {
    try {
      const teacherData = {
        name: data.name,
        department: data.department,
        qualification: data.qualification,
        max_credits: Number(data.maxCredits),
        preferred1: data.preferred1 || "",
        preferred2: data.preferred2 || "",
        preferred3: data.preferred3 || "",
        expertise_areas: data.expertiseAreas || ""
      };

      if (editId) {
        await updateTeacher(editId, teacherData);
      } else {
        await addTeacher(teacherData);
      }

      setShowModal(false);
      reset();
      setEditId(null);
      fetchTeachers();
    } catch (error) {
      console.error("Error adding/updating teacher:", error);
      alert("Failed to save teacher. Possible API error.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await deleteTeacher(id);
      fetchTeachers();
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

  const handleEdit = (teacher) => {
    setShowModal(true);
    setEditId(teacher.id);
    setValue("name", teacher.name);
    setValue("department", teacher.department);
    setValue("qualification", teacher.qualification);
    setValue("maxCredits", teacher.max_credits);
    setValue("preferred1", teacher.preferred1);
    setValue("preferred2", teacher.preferred2);
    setValue("preferred3", teacher.preferred3);
    setValue("expertiseAreas", teacher.expertise_areas);
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
      uploadTeachers(data);
    };
    reader.readAsBinaryString(file);
  };

  const uploadTeachers = async (data) => {
    for (let item of data) {
      try {
        await addTeacher({
          name: item.name,
          department: item.department,
          qualification: item.qualification || "BSc",
          max_credits: item.maxCredits || 0,
          preferred1: item.preferred1 || "",
          preferred2: item.preferred2 || "",
          preferred3: item.preferred3 || "",
          expertise_areas: item.expertise_areas || ""
        });
      } catch (e) {
        console.error("Failed to upload row", item, e);
      }
    }
    fetchTeachers();
    alert("Upload complete");
  };

  return (
    <PageContainer>
      <HeaderBar>
        <HeaderTitle>Manage Teachers</HeaderTitle>
      </HeaderBar>

      <AddButton onClick={() => { reset(); setEditId(null); setShowModal(true); }}>
        + Add Teacher
      </AddButton>
      <AddButton as="label" style={{ marginLeft: "10px", cursor: "pointer" }}>
        + Upload Excel
        <input type="file" accept=".xlsx,.csv" style={{ display: "none" }} onChange={handleExcelUpload} />
      </AddButton>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setShowModal(false)}><FiX size={22} /></CloseButton>
            <h2>{editId ? "Edit Teacher" : "Add New Teacher"}</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormRow>
                <Label>Name</Label>
                <Input {...register("name", { required: true })} placeholder="Name" />
              </FormRow>
              <FormRow>
                <Label>Department</Label>
                <Select {...register("department", { required: true })}>
                  <option value="">Select Department</option>
                  {departments.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}
                </Select>
              </FormRow>
              <FormRow>
                <Label>Qualification</Label>
                <Select {...register("qualification", { required: true })}>
                  <option value="BSc">BSc</option>
                  <option value="MSc">MSc</option>
                  <option value="PhD">PhD</option>
                  <option value="PostDoc">PostDoc</option>
                </Select>
              </FormRow>
              <FormRow>
                <Label>Max Credits</Label>
                <Input type="number" {...register("maxCredits", { required: true })} />
              </FormRow>
              {[1, 2, 3].map(n => (
                <FormRow key={n}>
                  <Label>Preferred {n}</Label>
                  <Select {...register(`preferred${n}`)}>
                    <option value="">Select Course</option>
                    {courses.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </Select>
                </FormRow>
              ))}
              <FormRow>
                <Label>Expertise Areas (comma separated)</Label>
                <Input {...register("expertiseAreas")} placeholder="e.g. AI, Web, Data" />
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
              <TableHeader>Name</TableHeader>
              <TableHeader>Department</TableHeader>
              <TableHeader>Qual</TableHeader>
              <TableHeader>Credits</TableHeader>
              <TableHeader>Expertise</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {teachers.map(t => (
              <TableRow key={t.id}>
                <TableData>{t.name}</TableData>
                <TableData>{t.department}</TableData>
                <TableData>{t.qualification}</TableData>
                <TableData>{t.max_credits}</TableData>
                <TableData>{t.expertise_areas}</TableData>
                <TableData>
                  <button className="edit-btn" onClick={() => handleEdit(t)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(t.id)}>Delete</button>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
};

export default ManageTeachers;