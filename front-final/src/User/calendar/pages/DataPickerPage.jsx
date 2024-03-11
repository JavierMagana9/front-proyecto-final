import React, { useContext, useState } from 'react'
import DataPicker from 'react-datepicker'
import { es } from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css'
import { DateContext } from '../context/DateContext';

export const DataPickerPage = () => {

    // const [stateStart, setStateStart] = useState(new Date())
    // const [start, setStart] = useState('')

   
const {msg,stateStart,setStateStart,stateEnd,setStateEnd}=useContext(DateContext)


    const handleDateChangeStart = (date) => {
        
        setStateStart(date)
    
    }

// const dateStart=()=>{


// }

    return (
        <div>
              {/* <p>DATA PICKER START</p>
            <pre>{JSON.stringify(stateStart, null, 3)}</pre> */}
            {/* <pre>{JSON.stringify(start, null, 3)}</pre> */}
            {/* <DataPicker
                selected={state}
                onChange={date => setState(date)}
                minDate={new Date()}
            /> */}
            <DataPicker
                selected={stateStart}
                onChange={handleDateChangeStart}
                minDate={new Date()}
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
//funcion para relacionar el usuario con un boton 
