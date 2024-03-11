import React from "react";
import { NavBarAdmin } from "../../Components";
import { TableReservas } from "../../Components/TableReservas";

export const ReservationDashPage = () => {
  return (
    <>
      <h2>Reservas</h2>
      <div className="table-container">
        <TableReservas />
      </div>
    </>
  );
};
