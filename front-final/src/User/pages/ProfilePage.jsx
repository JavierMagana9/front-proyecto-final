import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { LoadingPage } from '../../Pages/LoadingPage';
import { Prueba } from './Prueba';
import { Logout } from '../../Components/Logout';
import { DataPickerPage } from './DataPickerPage';
import { PaymentPage } from './PaymentPage';
import { CalendarPage } from './CalendarPage';
import { EndDatePicker } from '../calendar/pages/EndDatePicker';
import { SubscriptionPay } from './SubscriptionPay';

export const ProfilePage = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    isAuthenticated && (
      <div>
        <Logout />
        <pre>{JSON.stringify(user, null, 3)}</pre>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Prueba/>
        <CalendarPage />
        <div className='container date-padding'>
        <DataPickerPage />
        <hr />
        <EndDatePicker />
        </div>
    
        <PaymentPage />
        <hr />
        <SubscriptionPay/>
      </div>
    )
  );
}
