import React, { useContext, useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, parse, startOfWeek, getDay} from 'date-fns'
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

export const CalendarPage = () => {

const [event, setEvent] = useState([])

const {msg,stateStart,setStateStart,stateEnd,setStateEnd}=useContext(DateContext)

const{user,idRol}=useContext(UserContext)



const handleClick=async()=>{

  const respuesta = await fetch("http://localhost:5000/api/v1/calendar/ver-reservas")
        const event = await respuesta.json()
        
        const listEvent=event.data.map((evento)=>{
          return {
            title:evento.nombre,
            start:new Date (evento.date_start),
            end:new Date (evento.date_end)
        }})

        setEvent(listEvent)
        // console.log(event.data)
        // console.log("lista eventos",listEvent)
        
const calcHour=(stateEnd-stateStart)/3600000

// console.log("usuario",user.nickname)
//   console.log("esta es la resta",calcHour)

  
}
const myEventsList= event

console.log("esta es la resta",stateEnd-stateStart)

  return (
    <div>
    <div >
      <pre>{JSON.stringify(idRol,null,3)}</pre>
      <Calendar
        localizer={localizer}
        startAccessor='start'
        endAccessor='end'
        events={myEventsList}
        messages={messageTranslate()}
        style={{ height: 500 }}
      //eventPropGetter:{eventStyleGetter}
      //eventStyleGETTER es para asignar estilos
      />
      <pre>{JSON.stringify(event,null,3)}</pre>
      <button onClick={handleClick}>boton</button>
    </div>

  </div>
  )
}
