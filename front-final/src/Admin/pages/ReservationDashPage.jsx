import React from "react";
import { NavBarAdmin } from "../../Components";
import { TableReservas } from "../../Components/TableReservas";

/**
 * Muestra la página de gestión de reservas con un título y una tabla de reservas.
 * Utiliza `TableReservas` para listar las reservas.
 * 
 * @returns {JSX.Element} La página de reservas con un `<h2>` y `TableReservas`.
 */
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
