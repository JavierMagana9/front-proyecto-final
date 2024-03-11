import React from "react";
import { NavBarAdmin } from "../../Components";
import { TableAds } from "../../Components/TableAds";



/**
 * `AdsDashPage` es un componente, en concreto una pagina donde se pinta una tabla de anuncios. se utiliza `TableAds`, un componente que se encarga de mostrar y  interactuar con los datos de los anuncios. Este diseño modular facilita
 * la mantenibilidad y la reutilización de la interfaz de usuario dedicada a los anuncios.
 * 
 * @returns {JSX.Element} Un fragmento de React que contiene un título `<h2>`.
 */
export const AdsDashPage = () => {
  return (
    <>
      <h2>Tabla Anuncios</h2>
      <TableAds/>
    </>
  );
};
