import React, { useContext, useEffect } from "react";
import { Login, NavBarAdmin, Navbar } from "../Components";
import { Navigate, Route, Routes } from "react-router-dom";
// import { BaseRouter } from "../Routers";
import { AdsFreePage } from "./AdsFreePage";
import { useToolkit } from "../hook/useToolkit";
import { AdsDashPage, ReservationDashPage, UserDashPage } from "../Admin/pages";
import { MyAdsPage, ProfilePage, ReservationPage } from "../User/pages";
import { MyAdsSubPage, ProfileSubPage } from "../UserSub";

export const HomeFreePage = () => {
  const { auth, user, idBaseDatos, role } = useToolkit();

  return (
    <>

    {/* me falta hacer el navbar condicional con el navabar Admin */}
      {role === 'admin'? (<NavBarAdmin/>) : (<Navbar/>)}


      <Routes>
        {auth === "you shall not pass" ? (
          <>
            <Route path="/anuncios" element={<AdsFreePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        ) : role==='admin' ? (
          <>
            <Route path="/tabla-usuarios" element={<UserDashPage />} />
            <Route path="/tabla-anuncios" element={<AdsDashPage />} />
            <Route path="/tabla-reservas" element={<ReservationDashPage />} />
            <Route path="/*" element={<Navigate to="/tabla-usuarios" />} />
            </>
        ) : role === "user_reg" ? (
          <>
            <Route path="/anuncios" element={<AdsFreePage />} />
            <Route path="/reservas" element={<ReservationPage />} />
            <Route path="/mis-anuncios" element={<MyAdsPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
            ) : (
          <>
            <Route path="/anuncios" element={<AdsFreePage />} />
            <Route path="/mis-anuncios-sub" element={<MyAdsSubPage />} />
            <Route path="/perfil-sub" element={<ProfileSubPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
};
