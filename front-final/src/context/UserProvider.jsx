import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "universal-cookie";

export const UserProvider = ({ children }) => {

  const [role, setRole] = useState('')
  
const {user} = useAuth0()
const [idRol, setIdRol] = useState(null)


const postUser = async () => {

  const body={
    id_usuario: user.sub,
    nickname: user.nickname,
    email: user.email,
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
  console.log(data)
}

const getCookie = async () => {

const id=user.sub

  const res = await fetch([`http://localhost:5000/api/v1/users/${id}`], {
            headers: {
          'Content-Type': 'application/json'
      },
  }
  )
  const data = await res.json()
  
  setIdRol(data)
  const cookies = new Cookies()

  const json=JSON.stringify(data.data[0])

  cookies.set('token',json,{path: '/'})
  console.log("en cookie",data.data[0])
}

useEffect(() => {
  postUser()
  getCookie()
}, [user])


useEffect(()=>{
setRole('user_sub')
}, [])



const users = [
  {
    email: 'jorge@jorge.com',
    role: 'admin',
    name:'Jorge'
  },
  {
    email: 'pedro@pedro.com',
    role: 'user_sub',
    name:'Pedro'
  },
  {
    email: 'pablo@pablo.com',
    role: 'user_reg',
    name:'Pablo'
  }
]

  return (
    <>
<<<<<<< HEAD
      <UserContext.Provider value={{user,idRol}}>
=======
      <UserContext.Provider value={{user, users, setRole, role}}>
>>>>>>> 9553703e99e2e2482f4dfaf5a007f47898530d41
        {children}     
    </UserContext.Provider>
    </>
  );
};
