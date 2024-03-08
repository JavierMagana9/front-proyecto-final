import React from 'react'

export const RowReserva = ({reservaData}) => {


    const handlerEliminar = () => {

      

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
        <td> <button onClick={handlerEliminar}>Eliminar</button></td>
      </tr>
    </>
  );
}
