import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../slices/user.slice";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://physiotherapy-backend-6uw3.onrender.com/",
  credentials: "include",
});

export const baseQueryWithAutoLogout = async (args, api, extraOptions) => {
  console.log("🔥 baseQuery called", args);

  const result = await rawBaseQuery(args, api, extraOptions);

  console.log("❌ result:", result);
  const status = result.error?.status || result.error?.originalStatus;
  console.log("Detected status:", status, typeof status);
  if (status === 401 || status === 403) {
    console.log("Logging out user due to unauthorized");
    localStorage.removeItem("userInfo");
    api.dispatch(logout());
    window.location.href = "/";
  }

  return result;
};
