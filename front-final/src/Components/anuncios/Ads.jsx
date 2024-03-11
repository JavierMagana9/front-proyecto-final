import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

/**
 * Componente que muestra los detalles de un anuncio.
 * Utiliza `useAuth0` para obtener el usuario actual y muestra información del anuncio como título, descripción, precio y email.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.ad - Objeto del anuncio que contiene `titulo`, `descripcion`, `precio`, y `email`.
 * @returns {JSX.Element} Un artículo `article` con clase `card` que muestra los detalles del anuncio.
 */

export const Ads = ({ ad }) => {
  const { user } = useAuth0();
  return (
    <article className="card">
      <div>
        <img src="" alt="" />
      </div>

      <h3>{ad.titulo}</h3>
      <p>{ad.descripcion}</p>
      <p>{ad.precio}</p>
      <p>{ad.email}</p>
    </article>
  );
};
