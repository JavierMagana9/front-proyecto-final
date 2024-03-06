import React from 'react'
import { Link } from 'react-router-dom'
import { Logout } from './Logout'

const NavBarAdmin = () => {
  return (
    <ul className="flex-container space-around">
 <li>
            <Link to={"/userdashboard"}>Usuarios</Link>
          </li>
          <li>
            <Link to={"/reservationdashboard"}>Reservas</Link>
          </li>
          <li>
            <Link to={"/adsdashboard"}>Anuncios</Link>
          </li>
          <li>
            <Logout />
          </li>
       </ul> 
  )
}

export default NavBarAdmin
