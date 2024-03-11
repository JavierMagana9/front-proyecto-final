import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";
import { Logout } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./Login";
import { useToolkit } from "../hook/useToolkit";


/**
 * Componente `Navbar` que muestra una barra de navegación con enlaces dinámicos basados en el rol del usuario.
 * Utiliza `useToolkit` para acceder al estado de autenticación y al rol del usuario.
 * 
 * Dependiendo del rol del usuario (`user_reg` o `user_sub`), se muestran diferentes enlaces.
 * Los enlaces tienen un estilo subrayado cuando están.
 * 
 * - Todos los usuarios tienen acceso a los enlaces "Home" y "Anuncios".
 * - Los usuarios con el rol `user_reg` tienen enlaces adicionales a "Reservas", "Mis Anuncios" y "Perfil".
 * - Los usuarios con el rol `user_sub` tienen enlaces a "Mis Anuncios" y "Perfil" para sus respectivas versiones sub.
 * - Si el usuario no tiene un rol definido, se muestra un botón de "Log In"; si tiene un rol, se muestra un botón de "Log Out".
 * 
 * @returns {JSX.Element} Una lista desordenada `<ul>` con clases para el estilo y enlaces `<NavLink>` para la navegación.
 */

export const Navbar = () => {
  
  const {auth, role} = useToolkit()
  // console.log(auth)

  const activeStyle = {
    textDecoration: "underline",
  };
  return (
    <>
      <ul className="flex-container space-around navbar">
     
        
          <li>
            <NavLink to={"/"} style={({ isActive }) => (isActive ? activeStyle : {})}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/anuncios"} style={({ isActive }) => (isActive ? activeStyle : {})}>Anuncios</NavLink>
          </li>
         

      { ( role === "user_reg") ? (
          <>
         
            <li>
              <NavLink to={"/reservas"} style={({ isActive }) => (isActive ? activeStyle : {})}>Reservas</NavLink>
            </li>
            <li>
              <NavLink to={"/mis-anuncios"} style={({ isActive }) => (isActive ? activeStyle : {})}>Mis Anuncios</NavLink>
            </li>
            <li>
              <NavLink to={"/perfil"} style={({ isActive }) => (isActive ? activeStyle : {})}>Perfil</NavLink>
            </li>
            <li> <Logout /> </li>
          </>
        ) :   (role === "user_sub") ? (
          <>
            
            <li>
              <NavLink to={"/mis-anuncios-sub"} style={({ isActive }) => (isActive ? activeStyle : {})}>Mis Anuncios</NavLink>
            </li>
            <li>
              <NavLink to={"/perfil-sub"} style={({ isActive }) => (isActive ? activeStyle : {})}>Perfil</NavLink>
            </li>
            <li> <Logout /> </li>
          </>
        ) : (<></>)
      }

      
        {(!role) ? ( <li> <Login /> </li> ) : ( <></> )}

      </ul>
    </>
  );
};
