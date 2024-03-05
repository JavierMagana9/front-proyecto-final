import React, { useContext } from "react";
import { Navbar } from "../../Components";
import { UserContext } from "../../context/UserContext";

export const UserDashPage = () => {

const {users} = useContext(UserContext)
  return (
    <>
      <div>Tabla de Usuarios</div>
      <Navbar />

    <table>
    {users.map((user)=>{

      <tr>
        
      </tr>

    }) }

    </table>

    </>
  );
};
