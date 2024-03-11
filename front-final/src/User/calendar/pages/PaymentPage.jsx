import React, { useContext, useEffect, useState } from 'react'
import { DateContext } from '../context/DateContext'
import { crearReserva } from '../helpers/crearReserva'
import { UserContext } from '../../../context'

export const PaymentPage = () => {


    const [pay, setPay] = useState('')
    // const [start, setStart] = useState('')
    // const [end, SetEnd] = useState('')

    const { stateStart, stateEnd } = useContext(DateContext)

    const { idBaseDatos } = useContext(UserContext)



    const handleSubmit = async (ev) => {
        ev.preventDefault()

        const calcHour = { numero: (stateEnd - stateStart) / 3600000 }

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

    const redirection = () => {

        const red = pay.url
        return red

    }


    useEffect(() => {

        redirection()
        crearReserva(stateStart, stateEnd, idBaseDatos)


    }
        , [handleSubmit])

    return (
        <div>

            {/* <pre>{JSON.stringify(pay, null, 3)}</pre> */}

            <button onClick={handleSubmit}>confirmar</button>

            {/* <div>
                <p>{stateStart}</p>
                <p>{stateEnd}</p>
            </div> */}
            <a target='_blank' href={redirection()}>PAGAR</a>

        </div>
    )
}
