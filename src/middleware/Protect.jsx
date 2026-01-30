import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../utils/getCookie";

const ProtectedRoute = () => {
  const token = getCookie("Physio_Token");
  console.log(token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
