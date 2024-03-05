import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
// import { LoadingPage } from '../../Pages/LoadingPage';
import { Logout } from "../../Components/Logout";
import { UserContext } from "../../context/UserContext";
import { Navbar } from "../../Components";

export const ProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { role } = useContext(UserContext);

  // if (isLoading) {
  //   return <LoadingPage/>
  // }

  return (
    <>
      <Navbar />
      {isAuthenticated && (
        <div>
          <Logout />
          <p>{role}</p>
          <pre>{JSON.stringify(user, null, 3)}</pre>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};
