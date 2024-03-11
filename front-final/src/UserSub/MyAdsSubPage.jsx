import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MyGallery } from "../Components/anuncios/MyGallery";
import { useAds } from "../hook/useAds";


export const MyAdsSubPage = () => {

  const{user}= useAuth0()

  const {ads}=useAds()

  const userAds = ads.filter(ad => ad.email === user.email);

  return (
    <>
      <h2>Mis Anuncios</h2>
      
      <MyGallery userAds={userAds}/>
      
    </>
  );
};
