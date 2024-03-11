import React from "react";

export const apiTodosUsuarios = async () => {
  try {
    const respuesta = await fetch(
      `${import.meta.env.VITE_URL_BASE}/users/ver-usuarios`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!respuesta.ok) {

      throw new Error ('Usuarios no encontradas')
      
      }

    return await respuesta.json();
  } catch (error) {}
};
