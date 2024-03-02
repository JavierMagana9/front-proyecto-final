import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { LoadingPage } from '../../Pages/LoadingPage';
import { Prueba } from './Prueba';
import { Logout } from '../../Components/Logout';

export const ProfilePage = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingPage/>
  }


  return (
    isAuthenticated && (
      <div>
        <Logout/>
        <pre>{JSON.stringify(user,null,3)}</pre>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Prueba/>
      </div>
    )
  );
}
