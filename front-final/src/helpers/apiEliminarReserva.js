import React from 'react'

export const apiEliminarReserva = async(id_reserva) => {
  try {
    const respuesta = await fetch(
        `${import.meta.env.VITE_URL_BASE}/calendar/eliminar-reserva/${id_reserva}`,
        {
         method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  } catch (error) {
    
  }
}
