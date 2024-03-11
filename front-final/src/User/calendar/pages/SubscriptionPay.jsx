import React, { useEffect, useState } from 'react'

export const SubscriptionPay = () => {


    const [pay, setPay] = useState(null)

 

    const handleSubmit = async (ev) => {
        ev.preventDefault()

        // const num = {numero:ev.target.numero.value}

        const respuesta = await fetch("http://localhost:5000/api/v1/create-checkout-session-sub"
        // , {
        //     method: "POST", // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // }
        )
        const data = await respuesta.json()
        setPay(data)
        console.log(data)
        // window.location.href = data.url
        //revisar la docu de fetch
    }

   

  return (
    <div>
 <div>
            {/* <div>
                <img src='https://desacorde.periodismoudec.cl/wp-content/uploads/2022/11/IMG_5903.jpg' alt="SaladeEnsayo" />
            </div> */}
            <h3>PRESIONA EL BOTON PARA SUSCRIBIRTE</h3>
            <pre>{JSON.stringify(pay, null, 3)}</pre>
           
            <form onSubmit={handleSubmit}>
                <input type='submit' value='SUBSCRIPCION' />

            </form>
        
        </div>

    </div>
  )
}
