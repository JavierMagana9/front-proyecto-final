import { useAuth0 } from "@auth0/auth0-react";
import React from "react";



/**
 * Componente `Login` que proporciona un botón para iniciar sesión utilizando `useAuth0`.
 * Al hacer clic en el botón, se activa el proceso de login con Auth0.
 * 
 * @returns {JSX.Element} Un fragmento que contiene un botón para iniciar la sesión.
 */

export const Login = () => {

    const { loginWithRedirect } = useAuth0();
  return (
    
    <>
      <button className='no-btn' onClick={() => loginWithRedirect()}>Log In</button>
    </>
  );
};
