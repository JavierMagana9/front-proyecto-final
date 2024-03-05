
export const apiEvent = async() => {

    const respuesta = await fetch("http://localhost:5000/api/v1/calendar/ver-reservas")
    const event = await respuesta.json()
    
    const listEvent=event.data.map((evento)=>{
      return {
        title:evento.nombre,
        start:evento.date_start,
        end:evento.date_end
    }})

return listEvent

}
