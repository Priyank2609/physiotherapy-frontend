import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../slices/user.slice";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://physiotherapy-backend-6uw3.onrender.com/",
  credentials: "include",
});

export const baseQueryWithAutoLogout = async (args, api, extraOptions) => {
  console.log("Request:", args.method || "GET", args.url || args);

  const result = await rawBaseQuery(args, api, extraOptions);

  console.log("Response →", {
    data: result.data,
    error: result.error,
    status: result.error?.status,
    originalStatus: result.error?.originalStatus,
  });

  // ────────────────────────────────────────────────
  // Most reliable way to detect auth errors
  const isAuthError =
    result.error &&
    (result.error.status === 401 ||
      result.error.status === 403 ||
      result.error.originalStatus === 401 ||
      result.error.originalStatus === 403);

  if (isAuthError) {
    console.warn("🚪 Auth error detected → logging out");

    localStorage.removeItem("userInfo");
    // Optional: localStorage.clear();  // if you want to nuke everything

    api.dispatch(logout());

    // Small delay → helps when StrictMode + fast redirects cause race issues
    setTimeout(() => {
      window.location.href = "/"; // or "/login"
      // or better: use navigate() from react-router if possible
    }, 100);
  }

  return result;
};
