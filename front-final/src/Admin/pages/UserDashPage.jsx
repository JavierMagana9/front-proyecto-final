import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavBarAdmin, Table } from "../../Components";


/**
 * Muestra una página con una tabla de usuarios.
 * Utiliza `UserContext` para acceder a los datos de los usuarios y los presenta en `Table`.
 * 
 * @returns {JSX.Element} La página de usuarios con un título y una tabla.
 */

export const UserDashPage = () => {
  const { users } = useContext(UserContext);

  return (
    <>
      
        <h2>Tabla Usuarios</h2>
        <div className="table-container">
          <Table />
        </div>
     
    </>
  );
};
