
import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
// import { LoadingPage } from '../../Pages/LoadingPage';
import { UserContext } from "../../context/UserContext";

export const ProfilePage = () => {
  const { user } = useAuth0();
  const { role } = useContext(UserContext);


  return (
    <>
     
      
        <div>
          
          <p>{role}</p>
          <pre>{JSON.stringify(user, null, 3)}</pre>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
     
    </>
  );
};
