import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const Prueba = () => {

    const { user} = useContext(UserContext)



  return (
    <>
    <pre>{JSON.stringify(user,null,3)}</pre>
    <div>Prueba</div>
    </>
  )
}
