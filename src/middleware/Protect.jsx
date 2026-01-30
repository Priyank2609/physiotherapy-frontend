import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  console.log("cookies", document.cookie);

  const token = localStorage.getItem("Physio_Token");
  console.log(token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
