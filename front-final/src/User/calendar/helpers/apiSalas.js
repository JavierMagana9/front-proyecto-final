import React from 'react'

export const apiSalas = async () => {
    const respuesta = await fetch("http://localhost:5000/api/v1/calendar/ver-salas")
    const salas = await respuesta.json()
    
    const listSalas=salas.data.map((sala)=>{
      return {
        sala:sala.id_sala,
    }})

return listSalas
}


