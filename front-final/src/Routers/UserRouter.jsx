import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CalendarPage } from '../User/pages/CalendarPage'

export const UserRouter = () => {
  return (
    <>
    <Routes>

        <Route path='calendar' element={<CalendarPage/>}/>

    </Routes>
    
    </>
  )
}
