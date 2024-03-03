import { useState } from "react";



export const useDate = () => {

    const [stateStart, setStateStart] = useState(new Date())
    const [stateEnd, setStateEnd] = useState(new Date())
    // const [start, setStart] = useState('')

    const handleDateChange = (date) => {
        
        setStateStart(date)
        console.log(date)
    }

// const dateStart=()=>{

console.log("state prueba",stateStart)
// }

  return {
    stateStart,
    handleDateChange,
  }
}
