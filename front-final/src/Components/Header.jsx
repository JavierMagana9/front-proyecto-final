import React from "react";

/**
 * Renderiza el encabezado de la página incluyendo el nombre de la compañía y su logo.
 * El encabezado está seguido por bloques de color para estilización adicional.
 *
 * @returns {JSX.Element} El encabezado de la página con el logo y bloques de color decorativos.
 */

export const Header = () => {
  return (
    <>
      <header>
        <div className="color-block-red-dark">
          <div className="flex-container header-container">
            <p>MaCha Estudios</p>
            <div className="logo">
              <img
                src="src/assets/MaCha_logo_final-sinfondo.png"
                alt="MaCha logo"
              />
            </div>
          </div>
        </div>
        <div className="color-block-prime-red "></div>
        <div className="color-block-orange "></div>
      </header>
    </>
  );
};
