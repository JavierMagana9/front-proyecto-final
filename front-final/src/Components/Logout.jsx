import { useAuth0 } from '@auth0/auth0-react';
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import Cookies from 'universal-cookie';


/**
 * Componente `Logout` que proporciona un botón para cerrar sesión. Utiliza `useAuth0` para manejar
 * el proceso de logout y `UserContext` para restablecer el estado del usuario y el rol a valores predeterminados.
 * También elimina la cookie 'userInfo' al cerrar sesión.
 * 
 * Al hacer clic en el botón, se ejecuta `handleLogout`, que realiza las siguientes acciones:
 * - Restablece `idBaseDatos` y `role` a valores vacíos usando `UserContext`.
 * - Elimina la cookie 'userInfo'.
 * - Redirige al usuario a la URL especificada en `VITE_HOME_LOCAL` utilizando `logout` de Auth0.
 * 
 * @returns {JSX.Element} Un botón que, al hacer clic, ejecuta el proceso de cierre de sesión.
 */

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

      logout({ returnTo: import.meta.env.VITE_HOME });
    };
  return (
   
    <button className='no-btn' onClick={handleLogout}>
      Log Out
    </button>
  )
}
