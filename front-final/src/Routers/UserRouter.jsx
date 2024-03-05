import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfilePage } from '../User/pages/ProfilePage'

export const UserRouter = () => {
  return (
    <>
    <Routes>

        <Route path='/profile' element={<ProfilePage/>}/>
        {/* <Route path="/*" element={<Navigate to="/profile" />} /> */}

    </Routes>
    
    </>
  )
}
