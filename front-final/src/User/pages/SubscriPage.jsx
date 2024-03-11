import React, { useContext, useState } from 'react'
import DataPicker from 'react-datepicker'
import { SubscriptionPay, dataStartSub } from '../calendar/pages'
import { DateContext } from '../calendar/context/DateContext'
import { es } from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker from 'react-datepicker';
import { addDays } from 'date-fns';


export const SubscriPage = () => {

const {stateStartSub, setStateStartSub} = useContext(DateContext)

const handleDateChangeStart =(date)=>{
setStateStartSub(date)

}

  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(null);
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // }
  




  return (
    <>
    <div>
    <h1>SubscriPage</h1>
    <DataPicker
                selected={stateStartSub}
                onChange={handleDateChangeStart}
                minDate={new Date()}
                timeIntervals={30}
                dateFormat='PP'
                locale={es}
            />


<SubscriptionPay/>


{/* <ReactDatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 30)]}
      selectsRange
      selectsDisabledDaysInRange
      inline
      timeFormat="d"
      timeIntervals={"30 days"}
      timeCaption="Time"
      dateFormat="h:mm aa"
    /> */}

    </div>
    
    </>
    
  )
}

