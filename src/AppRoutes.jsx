import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AuthRoutes from './routes/authRoutes'
import AdminRoutes from './routes/adminroutes'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Navigate to={'/auth/login'} />} />
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
