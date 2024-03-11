import React, { useContext, useEffect, useState } from "react";
import { ReservationContext } from "../context/ReservationContext";
import { RowReserva } from "./RowReservas";
import { apiReservas } from "../helpers/apiReservas";

export const TableReservas = () => {
  const { reservation, setReservation } = useContext(ReservationContext);
  const [llavesReserva, setLlavesReserva] = useState([])
  const [page, setPage] = useState(0);
  const totalPages = 1;


  const bringingReservations = async () => {
    const reservas = await apiReservas();
    setReservation(reservas.data);
    // console.log(reservas);
  };

  useEffect(() => {
    bringingReservations();
  }, []);

  const gettingKeysRes = async () => {
   
    const keys = Object.keys(reservation[0]);
    setLlavesReserva(keys);
    // console.log(keys)
  };

  useEffect(() => {
    gettingKeysRes();
  }, [reservation]);

  const handlerPreviousPage = () => {
    setPage(page - 1);
  };

  const handlerNextPage = () => {
    setPage(page + 1);
  };

  return (
    <>
      {/* <pre>{JSON.stringify(llavesReserva, null, 3)}</pre> */}

      <table className="table">
        <thead>
          <tr>
            {llavesReserva.map((key) => {
              return <th key={key}>{key}</th>;
            })}
            <th>eliminar</th>
          </tr>
        </thead>
        <tbody>
          {reservation.map((reservaData) => (
            <RowReserva
              key={reservaData.id_reserva}
              reservaData={reservaData}
            />
          ))}
        </tbody>
      </table>
      <div className="align-center">
        <button onClick={handlerPreviousPage}
         disabled={ page <= 0}>
          {"<"}
        </button>
        <span>{page}</span>
        <button onClick={handlerNextPage} disabled={page >= totalPages}>
          {">"}
        </button>
      </div>
    </>
  );
};
