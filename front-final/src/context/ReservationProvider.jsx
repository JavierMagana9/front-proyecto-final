import React, { useState } from 'react'
import { ReservationContext } from './ReservationContext'

export const ReservationProvider = ({children}) => {
    const [reservation, setReservation] = useState([])


  return (
    <ReservationContext.Provider value={{reservation, setReservation}} >
        {children}
    </ReservationContext.Provider>
  )
}
