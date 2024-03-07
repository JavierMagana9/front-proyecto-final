import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./Login";

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const {user } = useContext(UserContext);
  const {role}=user;

  return (
    <>
      <ul className="flex-container space-around">
      
        <>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/anuncios"}>Anuncios</Link>
          </li>


      { ( role === "user_reg") ? (
          <>
         
            <li>
              <Link to={"/reservas"}>Reservas</Link>
            </li>
            <li>
              <Link to={"/mis-anuncios"}>Mis Anuncios</Link>
            </li>
            <li>
              <Link to={"/perfil"}>Perfil</Link>
            </li>
          
          </>
        ) : role === 'user_sub' ? (
          <>
            
            <li>
              <Link to={"/mis-anuncios-sub"}>Mis Anuncios</Link>
            </li>
            <li>
              <Link to={"/perfil-sub"}>Perfil</Link>
            </li>
           
          </>
        ):(<p></p>)
      }

      {
        (isAuthenticated) ?  <li> <Logout /> </li> :  <li> <Login /></li>
      } 
         
        </>
     
      </ul>
    </>
  );
};
