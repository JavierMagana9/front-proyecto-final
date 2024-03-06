
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { UserRouter } from "./UserRouter";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingPage } from "../Pages/LoadingPage";


export const AppRouter = () => {

  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingPage />;
  }


  return (
    <>

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
    </>
  );
};
