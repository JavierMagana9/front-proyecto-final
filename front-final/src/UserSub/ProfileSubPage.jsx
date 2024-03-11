import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'


export const ProfileSubPage = () => {
  const { user } = useAuth0();

  return (
    <>
    <div className="">
        <p>¡Hola {user.nickname}!</p>
       
        <div className="logo">
          <img className="img" src={user.picture} alt={user.name} />
        </div>

        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
   
    </>
    
  )
}
