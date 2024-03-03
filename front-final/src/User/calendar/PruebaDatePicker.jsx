import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export const PruebaDatePicker = () => {

    const [startDate, setStartDate] = useState(new Date());

  return (
    <div>PruebaDatePicker

<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

    </div>
  )
}
