import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Logout } from './Logout'


/**
 * Componente `NavBarAdmin` que muestra una barra de navegación específica para administradores.
 * Proporciona enlaces para gestionar usuarios, reservas y anuncios a través de tablas específicas.
 * 
 * Utiliza `NavLink` de React Router para la navegación, aplicando un estilo de subrayado a los enlaces activos.
 * Incluye:
 * - "Usuarios": enlace a la tabla de usuarios.
 * - "Reservas": enlace a la tabla de reservas.
 * - "Tabla Anuncios": enlace a la tabla de anuncios.
 * - Un botón de "Log Out" para cerrar sesión.
 * 
 * @returns {JSX.Element} Una lista `<ul>` con clases para flexibilidad y espacio, conteniendo enlaces y un botón de logout.
 */

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


