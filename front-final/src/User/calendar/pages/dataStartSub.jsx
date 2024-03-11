import React, { useContext, useState } from 'react'
import DataPicker from 'react-datepicker'
import { es } from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css'
import { DateContext } from '../context/DateContext';


export const dataStartSub = () => {

    // const [stateStart, setStateStart] = useState(new Date())
    // const [start, setStart] = useState('')

   
const {stateStartSub, setStateStartSub}=useContext(DateContext)


    const handleDateChangeStart = (date) => {
       
        setStateStartSub(date)
    
    }


    return (
        <div>
           
            <DataPicker
                selected={stateStartSub}
                onChange={handleDateChangeStart}
                minDate={new Date()}
                locale={es}
            />
        </div>
    )
}
//funcion para relacionar el usuario con un boton 
