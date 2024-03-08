import React from "react";

export const apiEliminarUsuario = async(id) => {
  try {


    const respuesta = await fetch(
        `${import.meta.env.VITE_URL_BASE}/users/eliminar-usuario/${id}`,
        {
         method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


  } catch (error) {



  }
};
