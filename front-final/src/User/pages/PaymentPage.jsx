import React, {useState } from 'react'

export const PaymentPage = () => {


    const [pay, setPay] = useState(null)

    const handleSubmit = async (ev) => {
        ev.preventDefault()

        const num = {numero:ev.target.numero.value}

        console.log(num)
        const respuesta = await fetch("http://localhost:5000/api/v1/create-checkout-session", {
            method: "POST", // or 'PUT'
            body: JSON.stringify(num), // data can be `string` or {object}!
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
            {/* <div>
                <img src='https://desacorde.periodismoudec.cl/wp-content/uploads/2022/11/IMG_5903.jpg' alt="SaladeEnsayo" />
            </div> */}
            <h3>Precio 30€</h3>
            <pre>{JSON.stringify(pay, null, 3)}</pre>
           
            <form onSubmit={handleSubmit}>
                <input type='text' name='numero' />
                <input type='submit' value='comprarForm' />

            </form>


        </div>
    )
}
