

export const crearReserva = async (stateStart,stateEnd,idBaseDatos) => {

   
    const body = {

        id_reserva: idBaseDatos+stateStart,
        id_usuario: idBaseDatos,
        date_start: stateStart,
        date_end: stateEnd,
        ref_pago: "53453463",
        sala: 1
    }

    const respuesta = await fetch(
        `http://localhost:5000/api/v1/calendar/crear-reserva`,
        {
            method: "POST", // or 'PUT'
            body: JSON.stringify(body), // data can be `string` or {object}!
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const data = await respuesta.json();
    console.log("crear reserva",data)

}



