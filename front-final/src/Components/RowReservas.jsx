import React from 'react'
import { apiEliminarReserva } from '../helpers/apiEliminarReserva';

export const RowReserva = ({reservaData}) => {


    const handlerEliminar = () => {

      apiEliminarReserva(reservaData.id_reserva)

    }


    
  return (
    <>
    {/* <pre>{JSON.stringify(reservaData, null, 3)}</pre> */}
      <tr>
        <td>{reservaData.id_reserva}</td>
        <td>{reservaData.id_usuario}</td>
        <td>{reservaData.date_start}</td>
        <td>{reservaData.date_end}</td>
        <td>{reservaData.ref_pago}</td>
        <td>{reservaData.sala}</td>
        <td>{reservaData.date}</td>
        <td> <button className="btn btn-red" onClick={handlerEliminar}>Eliminar</button></td>
      </tr>
    </>
  );
}
