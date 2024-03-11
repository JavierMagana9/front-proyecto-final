import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavBarAdmin, Table } from "../../Components";

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
