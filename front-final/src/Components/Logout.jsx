import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';

export const Logout = () => {

  const {idBaseDatos, setIdBaseDatos}=useContext(UserContext)

    const { logout } = useAuth0();

    useEffect(()=>{
      setIdBaseDatos('')
    },[])

  return (
    <button className='no-btn'
    onClick={() => {
      setIdBaseDatos('')
      logout({ logoutParams: { returnTo: 'http://localhost:5173/' } })
    }
    }>
      Log Out
    </button>
  )
}
