import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
// import { LoadingPage } from '../../Pages/LoadingPage';
import { UserContext } from "../../context/UserContext";
import { SubscriPage } from "./SubscriPage";

export const ProfilePage = () => {
  const { user } = useAuth0();
  const { role } = useContext(UserContext);

  return (
    <>
      <div className="">
        <p>¡Hola {user.nickname}!</p>
        {/* <pre>{JSON.stringify(user, null, 3)}</pre> */}
        <div className="logo">
          <img className="img" src={user.picture} alt={user.name} />
        </div>

        <h2>{user.name}</h2>
        <p>{user.email}</p>

        <div>
<p>Unete a nuestro plan Mensual!</p>
        <SubscriPage/>
        </div>
        
      </div>
    </>
  );
};
