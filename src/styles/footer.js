import styled from "styled-components";

export const FooterSection = styled.footer`
  background: linear-gradient(180deg, #064a30, #032e1e);
  color: #e5fdf6;
  padding: 80px 20px 0;
  /* Smooth font rendering */
  -webkit-font-smoothing: antialiased;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* ===== TOP GRID ===== */
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 40px;
    padding-bottom: 50px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  /* ===== BRAND ===== */
  .footer-brand h2 {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 10px;
    color: #ffffff;
  }

  .footer-brand p {
    font-size: 15px;
    color: #c7f9ec;
    line-height: 1.7;
    max-width: 320px;
  }

  /* ===== TITLES ===== */
  .footer-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
    color: #ffffff;
  }

  /* ===== LINKS ===== */
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li {
    margin-bottom: 10px;
  }

  .footer-links a {
    color: #c7f9ec;
    text-decoration: none;
    font-size: 15px;
    transition: all 0.3s ease;
  }

  .footer-links a:hover {
    color: #0ea5e9; /* Unified Blue */
    padding-left: 6px;
  }

  /* ===== CONTACT ===== */
  .contact-item {
    font-size: 15px;
    color: #c7f9ec;
    margin-bottom: 12px;
    line-height: 1.6;
    a {
      color: #ffffff;
    }
  }

  .contact-item span {
    font-weight: 600;
    color: #ffffff;
  }

  .socials {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 20px;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px; /* Slightly larger for better touch on mobile */
      height: 44px;
      border-radius: 50%;
      background-color: transparent;
      color: #ffffff; /* Dark Green from your card */
      border: 2px solid #064e3b;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      text-decoration: none;

      &:hover {
        background-color: #064e3b;
        color: #0ea5e9; /* White icon on Green background */
        transform: translateY(-4px);
        box-shadow: 0 10px 15px -3px rgba(6, 78, 59, 0.2);
      }
    }
  }

  /* ===== BOTTOM BAR ===== */
  .footer-bottom {
    padding: 20px 0;
    text-align: center;
    font-size: 14px;
    color: #c7f9ec;

    p {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .footer-bottom span {
    color: #0ea5e9; /* Unified Blue */
    font-weight: 600;
  }

  /* ===== HIDDEN ADMIN TRIGGER ===== */
  .admin-trigger {
    text-decoration: none;
    color: inherit;
    opacity: 0.15; /* Almost invisible to normal eyes */
    cursor: default;
    margin-left: 2px;
    transition: all 0.3s ease;
    font-weight: bold;

    &:hover {
      opacity: 1;
      color: #0ea5e9; /* Highlights blue only when you know where to hover */
      cursor: pointer;
    }
  }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 992px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    padding: 60px 16px 0;

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 30px;
      text-align: center;
    }

    .footer-brand p {
      margin: 0 auto;
    }

    .socials {
      justify-content: center;
    }
  }
`;
