import React, {useContext, useState } from 'react'
import { DateContext } from '../context/DateContext'

export const PaymentPage = () => {


    const [pay, setPay] = useState(null)

    const {stateStart,stateEnd} = useContext(DateContext)

    const handleSubmit = async (ev) => {
        ev.preventDefault()

        const calcHour={numero:(stateEnd-stateStart)/3600000}

        // const num = {numero:ev.target.numero.value}

        console.log(calcHour)
        const respuesta = await fetch("http://localhost:5000/api/v1/create-checkout-session", {
            method: "POST", // or 'PUT'
            body: JSON.stringify(calcHour), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            },
        }
        )
        const data = await respuesta.json()
        setPay(data)
        console.log(data)
        // window.location.href = data.url

        //revisar la docu de fetch
    }

    return (
        <div>PaymentPage
             <div>
                <img src='https://desacorde.periodismoudec.cl/wp-content/uploads/2022/11/IMG_5903.jpg' alt="SaladeEnsayo" />
            </div> 
            <pre>{JSON.stringify(pay, null, 3)}</pre>
           
            <form onSubmit={handleSubmit}>
                {/* <input type='text' name='numero' /> */}
                <input type='submit' value='SALA TEMPORAL' />

            </form>


        </div>
    )
}
