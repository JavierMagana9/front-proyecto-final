import React from "react";

export const Header = () => {
  return (
    <>
      <header className="color-block-red-dark">
        <div className="flex-container header-container">
          <p>MaCha Estudios</p>
          <div className="logo">
            <img
              src="src/assets/MaCha_logo_final-sinfondo.png"
              alt="MaCha logo"
            />
          </div>
        </div>
      </header>
      <div className="color-block-prime-red "></div>
      <div className="color-block-orange "></div>
    </>
  );
};
