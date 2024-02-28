import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../Pages/LoginPage'
import { UserRouter } from './UserRouter'

export const AppRouter = () => {
  return (
    <Routes>

        <Route path='login' element={<LoginPage/>}></Route>
        {/* <Route path="/*" element={<Navigate to='/login'/>} /> */}
        <Route path="/*" element={<UserRouter />} />

    </Routes>

  )
}
