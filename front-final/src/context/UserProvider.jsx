import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useAuth0 } from "@auth0/auth0-react";


export const UserProvider = ({ children }) => {

  const [role, setRole] = useState('')
  
const {user} = useAuth0()

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
      <UserContext.Provider value={{user, users, setRole, role}}>
        {children}     
    </UserContext.Provider>
    </>
  );
};
