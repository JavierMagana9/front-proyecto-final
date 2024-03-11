import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'

export const Ads = ({ad}) => {

    const { user } = useAuth0();
  return (
    <article className='card align-center'>
    
        
       <div>
            <img src="" alt="" />
        </div>
        
        <h3>{ad.titulo}</h3>
        <p>{ad.descripcion}</p>
        <p>{ad.precio}</p>
        <p>{ad.email}</p>
        
        
    </article>
  )
}
