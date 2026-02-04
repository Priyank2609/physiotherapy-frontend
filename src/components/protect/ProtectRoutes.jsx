import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const user = userInfo?.user;
  const isAdmin = user?.role === "Admin";

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
