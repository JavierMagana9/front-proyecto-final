import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { apiUsuario } from '../helpers/apiUsuario';
import { apiUsuarioId } from "../helpers/apiUsuarioId";
import { apiTodosUsuarios } from "../helpers/apiTodosUsuarios";
import { UserContext } from "../context";

export const useToolkit = () => {
  const [auth, setAuth] = useState("");
  const {idBaseDatos, setIdBaseDatos}=useContext(UserContext)
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [role, setRole] = useState('')
  // para traer el usuario de verdad de la base de datos,puede que mejor traerlo y luego  apiUsuario(userAuth);

  const bringingUserId = async() => {
   
    const idUser =  await apiUsuarioId(user.sub);

    const idBd = idUser.data[0].id_usuario
    const role = idUser.data[0].rol
    // console.log(idUser.data[0].rol)
    setRole(role)
    setIdBaseDatos(idBd);
  };

  //SI esta autenticado y trae el rol de la api cambiar el estado auth a autorizado y si no no

  const authenticateUser = () => {
    if(!user.sub){
        return setAuth("You shall not pass");
    } else {
       
       return user.sub === idBaseDatos && isAuthenticated
       ? setAuth("Pass")
       : setAuth("You shall not pass");
    }  
  };

  console.log(auth)

  // const cookies = new Cookies()
  // const getCookie = cookies.get('token')
  // console.log("este es el rol en la cookie",getCookie)

  

  useEffect(() => {
    bringingUserId();
  }, []);

  useEffect(() => {
    authenticateUser();
  });

//   if (isLoading) {
//     return <LoadingPage />;
//   }

  return {
    auth,
    user,
    idBaseDatos,
    role
  };
};
