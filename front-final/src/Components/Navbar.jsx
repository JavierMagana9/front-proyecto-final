import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";
import { Logout } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./Login";
import { useToolkit } from "../hook/useToolkit";

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

      {/* <pre>{JSON.stringify(auth, null, 3)}</pre> */}
        {/* {(auth === 'You shall not pass') ? ( <li> <Login /> </li> ) : ( <></> )} */}
        {(!role) ? ( <li> <Login /> </li> ) : ( <></> )}

      </ul>
    </>
  );
};
