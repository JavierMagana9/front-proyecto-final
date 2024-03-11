import React from "react";


/**
 * Componente `Intro` que muestra una imagen.
 * La imagen es de "People in Concert".
 * 
 * @returns {JSX.Element} 
 */
export const Intro = () => {
  return (
    <div className="foto">
      <img
      className="img"
        src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="People in Concert"
      />
    </div>
  );
};
