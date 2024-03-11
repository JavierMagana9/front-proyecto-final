import React from "react";
import { Gallery } from "../Components/anuncios/Gallery";
import { useAuth0 } from "@auth0/auth0-react";

export const AdsFreePage = () => {
  const{user}=useAuth0()
  return (
    <>
      <h2>Anuncios</h2>
     

    <Gallery/>

    </>
  );
};
