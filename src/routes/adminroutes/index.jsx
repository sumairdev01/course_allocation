import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AdminLayout from '../../layout/adminLayout'
import Dashboard from '../../pages/admin/dashboard'
import ManageTeachers from '../../pages/admin/teachersRegister'
import ManageCourses from '../../pages/admin/courseRegister'
import GenerateSchedule from '../../pages/admin/generateSchedule'

const AdminRoutes = () => {
  return (
    <div>
      <AdminLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teacherManagment" element={<ManageTeachers />} />
          <Route path="/courseManagment" element={<ManageCourses />} />
          <Route path="/generateAllocate" element={<GenerateSchedule />} />

        </Routes>
      </AdminLayout>
    </div>
  )
}

export default AdminRoutes
