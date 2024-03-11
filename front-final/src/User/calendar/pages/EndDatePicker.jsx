import React, { useContext } from 'react'
import DataPicker from 'react-datepicker'
import { es } from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css'
import { DateContext } from '../context/DateContext';

export const EndDatePicker = () => {

    // const [stateStart, setStateStart] = useState(new Date())
    // const [start, setStart] = useState('')
   
    const {msg,stateEnd,setStateEnd,stateStart}=useContext(DateContext)


    const handleDateChangeEnd = (date) => {
      
        setStateEnd(date)
      
    }

// const dateStart=()=>{

// }
  return (
    <div>
         {/* <p>DATA PICKER END</p>
    <pre>{JSON.stringify(stateEnd, null, 3)}</pre> */}
    {/* <pre>{JSON.stringify(start, null, 3)}</pre> */}
    {/* <DataPicker
        selected={state}
        onChange={date => setState(date)}
        minDate={new Date()}
    /> */}
    <DataPicker
        selected={stateEnd}
        onChange={handleDateChangeEnd}
        minDate={stateStart}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat='PPpp'
        locale={es}
    />
{/* <input type="button" value="fecha inicio" onClick={dateStart}  />
    <hr /> */}
</div>
  )
}
