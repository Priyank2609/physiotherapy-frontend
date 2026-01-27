import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Navbar } from "./components/header/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import ScrollToTop from "./components/scroll/ScrollTop";

function App() {
  return (
    <>
      <div className="app-layout">
        <Navbar />
        <ScrollToTop />
        <main className="app-content">
          <Outlet />
        </main>
        <button
          onClick={() => {
            localStorage.removeItem("userInfo");
            api.dispatch(logout());
            window.location.href = "/";
          }}
        >
          Force Logout & Clear
        </button>
        <Footer />
      </div>
    </>
  );
}

export default App;
