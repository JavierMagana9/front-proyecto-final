import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { useAuth0 } from "@auth0/auth0-react";

export const UserProvider = ({ children }) => {
  
const {user} = useAuth0()

  return (
    <>
      <UserContext.Provider value={{user}}>
        {children}     
    </UserContext.Provider>
    </>
  );
};
