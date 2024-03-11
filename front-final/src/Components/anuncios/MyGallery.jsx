import React from 'react'
import { Ads } from './Ads';

export const MyGallery = ({userAds}) => {
  return (
    <>
  <div className="flex-container card-container space-between">
    {userAds.map((ad, index) => {
    return <Ads key={`${ad.titulo}-${index}`} ad={ad} />;
     })}
    </div>

       
        </>
  )
}
