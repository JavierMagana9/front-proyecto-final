import React from 'react'

export const apiEditarUsuarios = async(id, user) => {
   try {



    const respuesta = await fetch(
        `${import.meta.env.VITE_URL_BASE}/users/actualizar-usuario/${id}`,
        {
         method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!respuesta.ok) {

        throw new Error ('no se pudo editar')
        
        }

  } catch (error) {



  }
}
