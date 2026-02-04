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
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  // /* ================= LEFT ================= */
  // .nav-brand {
  //   display: flex;
  //   align-items: center;
  //   gap: 15px;
  // }

  // .nav-brand img {
  //   width: 55px;
  //   height: 55px;
  //   background: #ffffff;
  //   padding: 6px;
  //   border-radius: 10px;
  // }

  // .nav-brand h1 {
  //   font-size: 24px;
  //   font-weight: 800;
  //   color: #ffffff;
  //   margin: 0;
  //   letter-spacing: 0.5px;
  // }

  // .nav-brand span {
  //   font-size: 13px;
  //   color: #d1fae5;
  //   display: block;
  //   margin-top: 2px;
  // }
  /* Add these to your CSS file */
  .nav-brand {
    display: flex;
    align-items: center;
    gap: 15px; /* Spaces the logo from the text */
    text-decoration: none;
    color: white;
  }

  .nav-brand img {
    height: 60px; /* Adjust based on your logo size */
    width: auto;
    border-radius: 8px;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .brand-text h1 {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 1px;
    margin: 0;
    line-height: 1.2;
  }

  .brand-text .tagline {
    font-size: 0.85rem;
    opacity: 0.9;
    font-weight: 500;
    display: block;
  }

  .brand-text .sub-tagline {
    font-size: 0.75rem;
    opacity: 0.7;
    font-style: italic;
    display: block;
  }
  /* ================= CENTER MENU ================= */
  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 32px;
    margin: 0;
    padding: 0;
  }

  .nav-links li {
    position: relative;
  }

  .nav-links a,
  .nav-links span {
    color: #ffffff;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 5px 0;
  }

  .nav-links a:hover,
  .nav-links span:hover {
    color: #22c1dc;
  }

  .dropdown-trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
  }

  .dropdown-arrow {
    cursor: pointer;
    font-size: 12px;
    padding: 4px;
  }

  .dropdown-arrow:hover {
    color: #0a6b5c;
  }

  /* ================= DROPDOWN ================= */
  .dropdown-menu {
    position: absolute;
    top: 40px;
    left: -20px;
    min-width: 240px;
    background: #ffffff;
    border-radius: 12px;
    padding: 12px 0;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 99;
    list-style: none;
  }

  .dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .dropdown-menu li a {
    display: block;
    padding: 12px 24px;
    color: #1f2937;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .dropdown-menu li a:hover {
    background: #f0fdfa;
    color: #0b5d3b;
    padding-left: 28px;
  }

  /* ================= RIGHT CTA ================= */
  .nav-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .cta-btn {
    background: linear-gradient(135deg, #22c1dc, #1aa6c8);
    color: #ffffff;
    padding: 12px 28px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(34, 193, 220, 0.3);
    transition: all 0.3s ease;
  }
  .mobile-cta {
    background: linear-gradient(135deg, #22c1dc, #1aa6c8);
    color: #ffffff;
    padding: 12px 28px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 8px 20px rgba(34, 193, 220, 0.3);
    transition: all 0.3s ease;
  }

  .cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(34, 193, 220, 0.5);
    filter: brightness(1.1);
  }

  /* ================= HAMBURGER ================= */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 6px;
    cursor: pointer;
  }

  .hamburger span {
    width: 30px;
    height: 3px;
    background: #ffffff;
    border-radius: 3px;
    transition: 0.3s;
  }
  .mobile-only-item {
    display: none;
  }

  /* ================= MOBILE ================= */
  @media (max-width: 1200px) {
    .nav-right {
      display: none; /* Hide desktop CTA on mobile */
    }
    .mobile-only-item {
      display: block;
    }
    .hamburger {
      display: flex;
      z-index: 1100;
    }

    /* Hamburger Animation */
    .hamburger.open span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }
    .hamburger.open span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.open span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
    }

    .mobile-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      backdrop-filter: blur(5px);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
    }
    .mobile-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .nav-links {
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      height: 100vh;
      background: #064a30;
      flex-direction: column;
      padding: 100px 24px 40px;
      gap: 15px;
      transform: translateX(100%);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1050;
      box-shadow: -10px 0 30px rgba(0, 0, 0, 0.4);
    }

    .nav-links.active {
      transform: translateX(0);
    }

    .nav-links li {
      width: 100%;
    }

    .nav-links a,
    .nav-links span {
      font-size: 14px;
      padding: 14px 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* MOBILE CTA BUTTONS */
    .nav-links .mobile-cta {
      display: flex;
      margin-top: 25px;
      background: linear-gradient(135deg, #22c1dc, #1aa6c8);
      color: white;
      justify-content: center;
      font-weight: 700;
      padding: 18px;
      border-radius: 50px;
      text-align: center;
      text-decoration: none;
      width: 100%;
    }
    .nav-links .mobile-cta:hover {
      transform: translateY(-2px);
      color: #ffffff;
      box-shadow: 0 10px 25px rgba(34, 193, 220, 0.5);
      filter: brightness(1.1);
    }

    /* DROPDOWN MOBILE */
    .dropdown-menu {
      position: static;
      background: rgba(0, 0, 0, 0.2);
      margin: 10px 0;
      opacity: 1;
      visibility: visible;
      transform: none;
      max-height: 0;
      padding: 0;
      overflow: hidden;
      transition: max-height 0.3s ease-in-out;
      box-shadow: none;
      min-width: 100%;
    }

    .dropdown.active .dropdown-menu {
      max-height: 500px;
      padding: 10px 0;
    }

    .dropdown-menu li a {
      padding: 12px 40px;
      font-size: 12px;
      color: #a7f3d0;
      background: transparent;
    }
  }

  @media (max-width: 450px) {
    .nav-brand img {
      width: 40px;
      height: 40px;
    }

    .nav-brand h1 {
      font-size: 18px;
    }

    .nav-brand span {
      font-size: 12px;
    }
    .brand-text .tagline {
      font-size: 0.75rem;
    }
  }
`;
