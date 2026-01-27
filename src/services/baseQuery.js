import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../slices/user.slice";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://physiotherapy-backend-6uw3.onrender.com/",
  credentials: "include",
});

export const baseQueryWithAutoLogout = async (args, api, extraOptions) => {
  console.log("🔥 baseQuery called", args);

  const result = await rawBaseQuery(args, api, extraOptions);

  console.log("❌ error:", result?.error);

  if (result?.error && [401, 403].includes(result.error.status)) {
    api.dispatch(logout());
    localStorage.removeItem("userinfo");
    window.location.replace("/login");
  }

  return result;
};
