import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../pages/auth/login'
import ForgotPassword from '../../pages/auth/forgetPassword'
import Register from '../../pages/auth/register'

const AuthRoutes = () => {
  return (
    <div>
      {/* <AuthLayout> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetPassword" element={<ForgotPassword />} />
      </Routes>
      {/* </AuthLayout> */}
    </div>
  )
}

export default AuthRoutes
