import React from "react";
import { Ads } from "./Ads";

export const Gallery = () => {
  const ads = [
    {
      titulo: "Titulo 1",
      descripcion: "ijvnfijnvefivije jvnjiwnijneivn fweew ewfwf",
      precio: "20€",
      email: "jorge@jorge.com",
    },
    {
      titulo: "Titulo 2",
      descripcion: "ijvnfijnvefivije jvnjiwnijneivn fweew ewfwf",
      precio: "20€",
      email: "jorge@jorge.com",
    },
    {
      titulo: "Titulo 3",
      descripcion: "ijvnfijnvefivije jvnjiwnijneivn fweew ewfwf",
      precio: "20€",
      email: "jorge@jorge.com",
    },
    {
      titulo: "Titulo 4",
      descripcion: "ijvnfijnvefivije jvnjiwnijneivn fweew ewfwf",
      precio: "20€",
      email: "jorge@jorge.com",
    },
  ];
  return (
    <div className="justify-center">
      {ads.map((ad) => {
        return <Ads key={ad.titulo} ad={ad} />;
      })}
    </div>
  );
};
