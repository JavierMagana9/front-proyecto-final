import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage } from '../Admin/pages/DashboardPage'

export const AdminRouter = () => {
  return (
    <Routes>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path="/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}
