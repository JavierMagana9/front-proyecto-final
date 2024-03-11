import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logout } from './Logout'

export const NavBarAdmin = () => {

  const activeStyle = {
    textDecoration: "underline",
  };

  return (
    <ul className="flex-container space-around navbar">
 <li>
            <NavLink to={"/tabla-usuarios"} style={({ isActive }) => (isActive ? activeStyle : {})}>Usuarios</NavLink>
          </li>
          <li>
            <NavLink to={"/tabla-reservas"} style={({ isActive }) => (isActive ? activeStyle : {})}>Reservas</NavLink>
          </li>
          <li>
            <NavLink to={"/tabla-anuncios"} style={({ isActive }) => (isActive ? activeStyle : {})}>Tabla Anuncios</NavLink>
          </li>
          <li>
            <Logout />
          </li>
       </ul> 
  )
}


