
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingPage } from "../Pages/LoadingPage";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { AdsDashPage, ReservationDashPage, UserDashPage } from "../Admin/pages";
import { AdsPage, MyAdsPage, ProfilePage, ReservationPage } from "../User/pages";
import { AdsSubPage, MyAdsSubPage, ProfileSubPage } from "../UserSub";
import { AdsFreePage, HomeFreePage } from "../Pages";



export const AppRouter = () => {
<<<<<<< HEAD
=======
    const { isAuthenticated, isLoading } = useAuth0();
   
    const { role } = useContext(UserContext)
>>>>>>> 9553703e99e2e2482f4dfaf5a007f47898530d41

  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingPage />;
  }


  return (
    <>
<<<<<<< HEAD

      <Routes>

        {!isAuthenticated ? (
          <>
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={<Navigate to='login' />} />
          </>
        ) :
          <Route path="/*" element={<UserRouter />} />
        }
      </Routes>
=======
   
    <Routes>
        
      { !isAuthenticated ? (
        <>
          <Route path="/" element={<HomeFreePage />} />
          <Route path="/adsfree" element={<AdsFreePage />} />  
           
          <Route path="/*" element={<Navigate to='/'/>}/>
        </>
      ) : role === 'admin' ? ( 
        <>
        <Route path="/userdashboard" element={<UserDashPage />} />
        <Route path="/adsdashboard" element={<AdsDashPage />} />
        <Route path="/reservationdashboard" element={<ReservationDashPage />} />
        <Route path="/*" element={<Navigate to='/userdashboard'/>}/>
        </>

      )   : role === 'user_reg' ? (
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
>>>>>>> 9553703e99e2e2482f4dfaf5a007f47898530d41
    </>
  );
};
