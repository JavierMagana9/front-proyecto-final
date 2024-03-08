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

    return await respuesta.json();
  } catch (error) {}
};
