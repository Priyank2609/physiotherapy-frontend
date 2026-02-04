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
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <>
      <div className="app-layout">
        <Navbar />
        <ScrollToTop />
        <main className="app-content">
          <Outlet />
        </main>

        <Footer />
        <SpeedInsights />
      </div>
    </>
  );
}

export default App;
