
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingPage } from "../Pages/LoadingPage";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { AdsDashPage, ReservationDashPage, UserDashPage } from "../Admin/pages";
import { AdsPage, MyAdsPage, ProfilePage, ReservationPage } from "../User/pages";
import { AdsSubPage, MyAdsSubPage, ProfileSubPage } from "../UserSub";
import { AdsFreePage, HomeFreePage } from "../Pages";
import { apiUsuario } from "../helpers/apiUsuario";
import { apiUsuarioId } from "../helpers/apiUsuarioId";
import Cookies from "universal-cookie";



export const AppRouter = () => {

  const { isAuthenticated, isLoading, user: userAuth } = useAuth0();

  const { user, setUser } = useContext(UserContext)


  apiUsuario(userAuth)

  apiUsuarioId(userAuth)


  const getRole = () => {
    const usuario = {
      id: '12345',
      name: 'pepe',
      role: 'admin',
      email: 'admin@gmail.es'
    }

    setUser(usuario)
  }

  const cookies = new Cookies()
  const getCookie = cookies.get('token')
  console.log("este es el rol en la cookie",getCookie)

  useEffect(() => {
    getRole()

  }, [])

  if (isLoading) {
    return <LoadingPage />;
  }


  return (
    <>

      <pre> {JSON.stringify(user, null, 3)} </pre>


      <Routes>

        {!isAuthenticated ? (
          <>
            <Route path="/" element={<HomeFreePage />} />
            <Route path="/adsfree" element={<AdsFreePage />} />

            <Route path="/*" element={<Navigate to='/' />} />
          </>
        ) : user.role === 'admin' ? (
          <>
            <Route path="/userdashboard" element={<UserDashPage />} />
            <Route path="/adsdashboard" element={<AdsDashPage />} />
            <Route path="/reservationdashboard" element={<ReservationDashPage />} />
            <Route path="/*" element={<Navigate to='/userdashboard' />} />
          </>

        ) : user.role === 'user_reg' ? (
          <>
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/ads" element={<AdsPage />} />
            <Route path="/myads" element={<MyAdsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/*" element={<Navigate to='/reservation' />} />
          </>
        ) : (
          <>
            <Route path="/adssub" element={<AdsSubPage />} />
            <Route path="/myadssub" element={<MyAdsSubPage />} />
            <Route path="/profilessub" element={<ProfileSubPage />} />
            <Route path="/*" element={<Navigate to='/adssub' />} />
          </>
        )
        }
      </Routes>
    </>
  );
};
