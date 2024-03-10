import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingPage } from "../Pages/LoadingPage";
import { HomeFreePage } from "../Pages";

export const AppRouter = () => {
  const { isLoading } = useAuth0(); 

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <Routes>      
        <Route path="*" element={<HomeFreePage />} />
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
};
