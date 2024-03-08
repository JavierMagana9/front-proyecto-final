import React from "react";
import { NavBarAdmin } from "../../Components";
import { TableReservas } from "../../Components/TableReservas";

export const ReservationDashPage = () => {


  
  return (
    <>
     
      <NavBarAdmin/>
      <h2>Reservas</h2>
      <TableReservas/>
    </>
  );
};
