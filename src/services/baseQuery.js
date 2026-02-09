import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../slices/user.slice";

/**
 * Base query with auto logout on 401/403
 */

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "https://physiotherapy-backend-6uw3.onrender.com/",
  credentials: "include",
});

// 🔒 prevents multiple logout calls from parallel 401s
let isLoggingOut = false;

export const baseQueryWithAutoLogout = async (args, api, extraOptions) => {
  // 🔹 Get request URL safely
  const url = typeof args === "string" ? args : (args?.url ?? "");

  const result = await rawBaseQuery(args, api, extraOptions);

  // 🔹 Skip auth-free routes (VERY IMPORTANT)
  const authFreeRoutes = ["users/login", "users/logout"];
  if (authFreeRoutes.some((route) => url.includes(route))) {
    return result;
  }

  // 🔹 Detect auth errors
  const isAuthError =
    result?.error &&
    (result.error.status === 401 ||
      result.error.status === 403 ||
      result.error.originalStatus === 401 ||
      result.error.originalStatus === 403);

  // 🔥 Auto logout
  if (isAuthError && !isLoggingOut) {
    isLoggingOut = true;

    console.warn("🚪 Session expired → auto logout");

    // clear client state
    localStorage.removeItem("userInfo");
    api.dispatch(logout());

    // redirect (replace avoids back button issues)
    setTimeout(() => {
      window.location.replace("/admin/login");
    }, 0);
  }

  return result;
};
