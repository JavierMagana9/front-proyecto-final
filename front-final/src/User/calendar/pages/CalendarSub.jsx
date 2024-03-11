import React, { useContext, useEffect, useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import esES from 'date-fns/locale/es';
import { messageTranslate } from '../helpers/messageTranslate';
import { DateContext } from '../context/DateContext';
import { UserContext } from '../../../context/UserContext';
import { apiEvent } from '../helpers/apiEvent';


const locales = {
    'es': esES,
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })
  

export const CalendarSub = () => {

    const [event, setEvent] = useState([])

    const [myEvents, setMyEvents] = useState([])
  
  
    const mostrarEventos = async () => {
  
      const respuesta = await fetch(`${import.meta.env.VITE_URL_BASE}/calendar/ver-reservas`)
      const event = await respuesta.json()
  
      const listEvent = event.data.map((evento) => {
        return {
          title: "ocupado",
          start: new Date(evento.date_start),
          end: new Date(evento.date_end)
        }
      })
  
      setEvent(listEvent)
    }
    const myEventsList = event
  
    const mostrarMisEventos = async () => {
  
      const respuesta = await fetch('http://localhost:5000/api/v1/calendar/ver-misreservas/auth0|65e89434da1418f91ee57931')
      const event = await respuesta.json()
  
      const misEventos = event.data.map((evento) => {
        return {
          title: evento.id_reserva,
          start: new Date(evento.date_start),
          end: new Date(evento.date_end)
        }
      })
      setMyEvents(misEventos)
      // console.log("Mis eventos", misEventos)
  
    }
  
    
    useEffect(() => {
      mostrarEventos(),
        mostrarMisEventos()
  
  
    }, [])
  
      
  
    return (
      <div>
        <div >
          
          <Calendar
            localizer={localizer}
            startAccessor='start'
            endAccessor='end'
            // eventPropGetter={eventPropGetter}
            events={myEventsList}
            messages={messageTranslate()}
            style={{ height: 500 }}
          // eventPropGetter={eventStyleGetter}
          //eventStyleGETTER es para asignar estilos
          />
          {/* <pre>{JSON.stringify(event, null, 3)}</pre> */}
          {/* <button onClick={handleClick}>boton</button> */}
        </div>
  
      </div>
    )
}




