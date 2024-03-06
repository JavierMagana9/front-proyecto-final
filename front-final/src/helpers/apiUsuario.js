

export const apiUsuario = async(userAuth) => {

const body={
        id_usuario: userAuth.sub,
        nickname: userAuth.nickname,
        email: userAuth.email,
        rol: "user_reg"
      }

    const respuesta = await fetch("http://localhost:5000/api/v1/users/crear-usuario", {
               method: "POST", // or 'PUT'
               body: JSON.stringify(body), // data can be `string` or {object}!
               headers: {
                   'Content-Type': 'application/json'
               },
           }
           )
           const data = await respuesta.json()
        // console.log(data)
      }
   
    




