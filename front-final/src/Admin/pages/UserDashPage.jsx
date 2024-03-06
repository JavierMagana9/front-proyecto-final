import React, { useContext } from "react";
import { Navbar } from "../../Components";
import { UserContext } from "../../context/UserContext";

export const UserDashPage = () => {

const {users} = useContext(UserContext)



  return (
    <>
      
      <Navbar />
      <h2>Tabla Usuarios</h2>
   

    </>
  );
};
