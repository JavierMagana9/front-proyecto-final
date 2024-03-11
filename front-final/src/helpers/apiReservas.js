import React from "react";

export const apiReservas = async () => {
  try {
    const respuesta = await fetch(
      `${import.meta.env.VITE_URL_BASE}/calendar/ver-reservas`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!respuesta.ok) {

      throw new Error ('Reservas no encontradas')
      
      }
      
    return await respuesta.json();
  } catch (error) {

  }
};
