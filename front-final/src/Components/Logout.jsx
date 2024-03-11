import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import Cookies from 'universal-cookie';

export const Logout = () => {

  const {idBaseDatos, setIdBaseDatos, role, setRole}=useContext(UserContext)

    const { logout } = useAuth0();
    const cookies = new Cookies();

    const handleLogout = () => {
      
      setIdBaseDatos('');
      setRole('');
  
      // Elimina la cookie 'userInfo'
      cookies.remove('userInfo', { path: '/' });
  
      
     //puede funcionar mejor q el vite_home una vez despleguemos en render: window.location.origin
      logout({ returnTo: import.meta.env.VITE_HOME_LOCAL });
    };
  return (
    // <button className='no-btn'
    // onClick={() => {
    //   setIdBaseDatos('')
    //   setRole('')
    //   logout({ logoutParams: { returnTo: import.meta.env.VITE_HOME_LOCAL } })
    // }
    // }>
    //   Log Out
    // </button>
    <button className='no-btn' onClick={handleLogout}>
      Log Out
    </button>
  )
}
