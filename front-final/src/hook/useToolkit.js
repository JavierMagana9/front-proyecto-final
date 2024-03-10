import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { apiUsuario } from '../helpers/apiUsuario';
import { apiUsuarioId } from "../helpers/apiUsuarioId";
import { apiTodosUsuarios } from "../helpers/apiTodosUsuarios";
import { UserContext } from "../context";
import Cookies from "universal-cookie";
import { apiUsuario } from "../helpers/apiUsuario";

export const useToolkit = () => {
  const [auth, setAuth] = useState("");
  const {idBaseDatos, setIdBaseDatos, role, setRole}=useContext(UserContext)
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [isUserIdFetched, setIsUserIdFetched] = useState(false);


const register = async () => {

    const body={
    
            id_usuario: user.sub ,
            nickname: user.nickname,
            email: user.email,
            rol: "user_reg",
            estado: 'true'
          }
         await apiUsuario(body)

}
 

useEffect(()=>{
    register()
}, [])

  const cookies = new Cookies()
  // para traer el usuario de verdad de la base de datos,puede que mejor traerlo y luego  apiUsuario(userAuth);

  const bringingUserId = async() => {
   
    const idUser =  await apiUsuarioId(user.sub);

    const idBd = idUser.data[0].id_usuario
    const role = idUser.data[0].rol
    // console.log(idUser.data[0].rol)
   setIsUserIdFetched(true)

    //nuevo para las cookies
    const userInfo = { role: role, idBaseDatos: idBd };
    cookies.set('userInfo', JSON.stringify(userInfo), { path: '/' });
  };

  useEffect(() => {
    bringingUserId();
  }, []);
  //SI esta autenticado y trae el rol de la api cambiar el estado auth a autorizado y si no no

  const authenticateUser = () => {
    //esto es de la cookie
    const userInfoCookie = cookies.get('userInfo');
    // {role: 'admin', idBaseDatos: 'auth0|65e74f53161f8843b4720ad4'}
    setRole(userInfoCookie.role)
    console.log("userInfoCookie",userInfoCookie)
    setIdBaseDatos(userInfoCookie.idBaseDatos);
    // console.log("userInfoCookie.idBaseDatos",userInfoCookie.idBaseDatos)

//esto no, antes !user.sub
    if(!userInfoCookie){
        return setAuth("You shall not pass");
    } else {
       
       return user.sub === idBaseDatos && isAuthenticated
       ? setAuth("Pass")
       : setAuth("You shall not pass");
       
     }  
  };

  console.log(auth)

//Seteo la cookie una vez he autenticado con el rol, id_usuario
 

  

  

  useEffect(() => {
    if (isUserIdFetched) {
        authenticateUser();
      }
  }, [isUserIdFetched]);

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
