import styled from "styled-components";

export const MainNavbar = styled.header`
  width: 100%;
  background: #0b5d3b;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  * {
    box-sizing: border-box;
  }

  .nav-left {
    a {
      text-decoration: none;
    }
  }

  .nav-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 12px 30px; /* Slightly tighter padding */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* ================= BRANDING ================= */
  .nav-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: white;
  }

  .nav-brand img {
    height: 55px;
    width: auto;
    border-radius: 8px;
    background: #ffffff;
    padding: 4px;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .brand-text h1 {
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: 0.5px;
    margin: 0;
    line-height: 1.1;
  }

  .brand-text .tagline {
    font-size: 0.8rem;
    opacity: 0.9;
    font-weight: 500;
    display: block;
    color: #d1fae5;
  }

  .brand-text .sub-tagline {
    font-size: 0.7rem;
    opacity: 0.8;
    font-style: italic;
    display: block;
  }

  /* ================= CENTER MENU (DESKTOP) ================= */
  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 28px;
    margin: 0;
    padding: 0;
  }

  .nav-links li {
    position: relative;
  }

  .nav-links a,
  .nav-links span {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .nav-links a:hover {
    color: #22c1dc;
  }

  /* ================= RIGHT CTA ================= */
  .nav-right {
    display: flex;
    align-items: center;
  }

  .cta-btn {
    background: linear-gradient(135deg, #22c1dc, #1aa6c8);
    color: #ffffff;
    padding: 10px 24px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  /* ================= HAMBURGER ================= */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 5px;
  }

  .hamburger span {
    width: 25px;
    height: 2px;
    background: #ffffff;
    border-radius: 2px;
    transition: 0.3s;
  }

  /* ================= MOBILE VIEW OPTIMIZATIONS ================= */
  @media (max-width: 1200px) {
    .nav-right {
      display: none;
    }

    .hamburger {
      display: flex;
      z-index: 1100;
    }

    .hamburger.open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    .hamburger.open span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: 0;
      width: 280px; /* Slimmer drawer */
      height: 100vh;
      background: #06432b;
      flex-direction: column;
      padding: 80px 15px 30px; /* Reduced top/side padding */
      gap: 8px; /* Tighter gap between menu items */
      transform: translateX(100%);
      transition: transform 0.3s ease-in-out;
      z-index: 1050;
      overflow-y: auto;
    }

    .nav-links.active {
      transform: translateX(0);
    }

    .nav-links a,
    .nav-links span {
      font-size: 16px; /* Smaller font for mobile */
      padding: 12px 16px; /* Reduced padding from your big boxes */
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      display: flex;
      width: 100%;
    }

    .nav-links .mobile-cta {
      margin-top: 15px;
      padding: 14px;
      font-size: 16px;
      background: #22c1dc;
      border-radius: 30px;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .mobile-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(3px);
      opacity: 0;
      visibility: hidden;
      z-index: 1000;
    }
    .mobile-overlay.active {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 450px) {
    .nav-container {
      padding: 10px 15px;
    }
    .brand-text h1 {
      font-size: 1.1rem;
    }
    .nav-brand img {
      height: 45px;
    }
  }
`;
