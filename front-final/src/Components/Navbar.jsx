import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Logout } from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./Login";

export const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const { role } = useContext(UserContext);

  return (
    <>
      <div>Navbar</div>
      {!isAuthenticated ? (
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/adsfree"}>Anuncios</Link>
          </li>
          <li>
            <Login />
          </li>
        </ul>
      ) : role === "admin" ? (
        <ul>
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
      ) : role === "user_reg" ? (
        <ul>
          <li>
            <Link to={"/reservation"}>Reservas</Link>
          </li>
          <li>
            <Link to={"/ads"}>Anuncios</Link>
          </li>
          <li>
            <Link to={"/myads"}>Mis Anuncios</Link>
          </li>
          <li>
            <Link to={"/profile"}>Perfil</Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to={"/adssub"}>Anuncios</Link>
          </li>
          <li>
            <Link to={"/myadssub"}>Mis Anuncios</Link>
          </li>
          <li>
            <Link to={"/profilesub"}>Perfil</Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      )}
    </>
  );
};
