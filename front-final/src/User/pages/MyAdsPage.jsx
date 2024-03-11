import React from "react";
import { MyGallery } from "../../Components/anuncios/MyGallery";
import { useAuth0 } from "@auth0/auth0-react";
import { useAds } from "../../hook/useAds";


export const MyAdsPage = () => {

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
