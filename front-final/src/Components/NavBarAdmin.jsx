import React from 'react'
import { Link } from 'react-router-dom'
import { Logout } from './Logout'

export const NavBarAdmin = () => {
  return (
    <ul className="flex-container space-around">
 <li>
            <Link to={"/tabla-usuarios"}>Usuarios</Link>
          </li>
          <li>
            <Link to={"/tabla-reservas"}>Reservas</Link>
          </li>
          <li>
            <Link to={"/tabla-anuncios"}>Tabla Anuncios</Link>
          </li>
          <li>
            <Logout />
          </li>
       </ul> 
  )
}


