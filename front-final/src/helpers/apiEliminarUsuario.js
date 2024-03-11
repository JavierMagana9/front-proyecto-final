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
      if (!respuesta.ok) {

        throw new Error ('no se pudo eliminar el usuario')
        
        }

  } catch (error) {



  }
};
