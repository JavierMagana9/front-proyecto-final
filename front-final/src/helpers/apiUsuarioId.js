import Cookies from "universal-cookie"


export const apiUsuarioId = async (userAuth) => {

    const id_usuario = userAuth.sub

    console.log(id_usuario)
    const res = await fetch([`http://localhost:5000/api/v1/users/${id_usuario}`], {
        headers: {
            'Content-Type': 'application/json'
        },
    }
    )
    const data = await res.json()
    
    //   const cookies = new Cookies()
    //   const rol=JSON.stringify(data.data[0].rol)

    //   cookies.set('token',rol)
      
}




