import React, { useEffect, useState } from "react";
import { CalendarPage, DataPickerPage, EndDatePicker, PaymentPage } from "../calendar/pages";
import { apiSalas } from "../calendar/helpers/apiSalas";


export const ReservationPage = () => {
  
const [sala, setSala] =useState([])

const mostrarSalas=async()=>{

 const salas=await apiSalas()

 setSala(salas)
}

const handleSelect=(ev)=>{

  const select=ev.target.value
console.log(select)

}

useEffect(() => {
mostrarSalas()

}, [])



  return (
    <>

      <div>
      

<h1 >¡¡Reserva tu sala con nosotros!!</h1>
<p  >CALENDARIO DE RESERVAS</p>
<select onChange={handleSelect}>
  {sala.map((item,index)=>{return<>
    <option key={index}>{item.sala}</option>
  </> })
  }
</select>
<div>
<CalendarPage />
</div>
<section  className="align-center justify-center">
  <article>
    <p>Seleccione su hora de entrada</p>
    <DataPickerPage/>
  </article>
  <article>
  <p>Seleccione su hora de salida</p>
    <EndDatePicker/>
  </article>
  <PaymentPage/>
</section>
        
      </div>
      
      
    </>
  );
};
