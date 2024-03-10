import React from 'react'

export const apiEditarUsuarios = async(id, user) => {
   try {

console.log("id",id)
console.log("user",user)
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


  } catch (error) {



  }
}
