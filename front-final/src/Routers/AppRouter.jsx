import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingPage } from "../Pages/LoadingPage";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { AdsDashPage, ReservationDashPage, UserDashPage } from "../Admin/pages";
import { MyAdsPage, ProfilePage, ReservationPage } from "../User/pages";
import { MyAdsSubPage, ProfileSubPage } from "../UserSub";
import { AdsFreePage, HomeFreePage } from "../Pages";
import { apiUsuario } from "../helpers/apiUsuario";
import { apiUsuarioId } from "../helpers/apiUsuarioId";
// import Cookies from "universal-cookie";
import { BaseRouter } from "./BaseRouter";
import { Navbar } from "../Components";

export const AppRouter = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  const { user, setUser } = useContext(UserContext);

  // apiUsuario(userAuth);

  // apiUsuarioId(userAuth);

  const getRole = () => {
    const usuario = {
      id: "12345",
      name: "pepe",
      role: "admin",
      email: "admin@gmail.es",
    };

    setUser(usuario);
  };

  // const cookies = new Cookies()
  // const getCookie = cookies.get('token')
  // console.log("este es el rol en la cookie",getCookie)

  useEffect(() => {
    getRole();
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      {/* <pre> {JSON.stringify(user, null, 3)} </pre> */}
      <Navbar />

      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<HomeFreePage />} />
            <Route path="/anuncios" element={<AdsFreePage />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="/*" element={<BaseRouter />} />
        )}
      </Routes>
    </>
  );
};
