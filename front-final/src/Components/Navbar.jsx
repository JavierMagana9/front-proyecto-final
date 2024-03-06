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
            <Link to={"/adsfree"}>Anuncios</Link>
          </li>


      { ( role === "user_reg") ? (
          <>
            <li>
              <Link to={"/reservation"}>Reservas</Link>
            </li>
            <li>
              <Link to={"/myads"}>Mis Anuncios</Link>
            </li>
            <li>
              <Link to={"/profile"}>Perfil</Link>
            </li>
          
          </>
        ) : (
          <>
          
            <li>
              <Link to={"/myadssub"}>Mis Anuncios</Link>
            </li>
            <li>
              <Link to={"/profilesub"}>Perfil</Link>
            </li>
           
          </>
        )
      }

      {
        (isAuthenticated) ?  <li> <Logout /> </li> :  <li> <Login /></li>
      }
         
        </>
     
      </ul>
    </>
  );
};
