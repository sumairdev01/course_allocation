import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

export const getTeachers = () => api.get('teachers/');
export const addTeacher = (data) => api.post('teachers/', data);
export const updateTeacher = (id, data) => api.patch(`teachers/${id}/`, data);
export const deleteTeacher = (id) => api.delete(`teachers/${id}/`);

export const getCourses = () => api.get('courses/');
export const addCourse = (data) => api.post('courses/', data);
export const updateCourse = (id, data) => api.patch(`courses/${id}/`, data);
export const deleteCourse = (id) => api.delete(`courses/${id}/`);

export const getAllocations = () => api.get('allocations/');
export const generateSchedule = () => api.post('generate-schedule/');

export default api;
