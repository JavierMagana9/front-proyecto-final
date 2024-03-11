import React from "react";
import { Ads } from "./Ads";
import { useAds } from "../../hook/useAds";

export const Gallery = () => {
    const {ads}=useAds()


  return (
    <div className="flex-container card-container space-between">
      {ads.map((ad) => {
        return <Ads key={ad.titulo} ad={ad} />;
      })}
    </div>
  );
};
