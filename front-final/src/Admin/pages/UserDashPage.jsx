import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavBarAdmin } from "../../Components";


export const UserDashPage = () => {



const {users} = useContext(UserContext)



  return (
    <>
     <NavBarAdmin/>
<main className="container">

<h2>Tabla Usuarios</h2>

  </main>
 
    </>
  );
};
