import React from "react";
import { CalendarPage, DataPickerPage, EndDatePicker, PaymentPage } from "../calendar/pages";


export const ReservationPage = () => {
  


  return (
    <>

      <div>
      

<h1 >¡¡Reserva tu sala con nosotros!!</h1>
<p  >CALENDARIO DE RESERVAS</p>
<div className="box-calendar">
<CalendarPage />
</div>
<section>
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
