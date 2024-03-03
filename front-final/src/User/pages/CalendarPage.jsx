import React, { useContext } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { format, parse, startOfWeek, getDay} from 'date-fns'
// import parse from 'date-fns/parse'
// import startOfWeek from 'date-fns/startOfWeek'
// import getDay from 'date-fns/getDay'
// import enUS from 'date-fns/locale/en-US'
import esES from 'date-fns/locale/es';
import { messageTranslate } from '../calendar/helpers/messageTranslate';
import { DateContext } from '../calendar/context/DateContext';



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
// const myEventsList= [{
//     title: "evento1",
//     start: new Date('2024-02-27 10:22:00'),
//     end: new Date('2024-02-28 10:42:00')
//   },{
//     title: "evento2",
//     start: new Date('2024-02-28 10:22:00'),
//     end: new Date('Sun Mar 03 2024 12:09:19 GMT+0100 (hora estándar de Europa central)')
//   },
// ]
// const myEventsList = [{
//   title: "evento1",
//   start: new Date(),
//   end: new Date (),
// //   end: addHours(new Date(), 2)
// }]


export const CalendarPage = () => {

  const {msg,stateStart,setStateStart,stateEnd,setStateEnd}=useContext(DateContext)



  const myEventsList= [{
    title: "evento1",
    start: new Date('2024-02-27 10:22:00'),
    end: new Date('2024-02-28 10:42:00')
  },{
    title: "evento2",
    start: new Date(stateStart),
    end: new Date(stateEnd)
  },
]

const handleClick=()=>{

const calcHour=(stateEnd-stateStart)/3600000

  console.log("esta es la resta",calcHour)


}


console.log("esta es la resta",stateEnd-stateStart)

  return (
    <div>
    <div >
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
      <button onClick={handleClick}>boton</button>
    </div>

  </div>
  )
}
