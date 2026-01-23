import styled from "styled-components";

export const ContactWrapper = styled.section`
  background: #ffffff;
  -webkit-font-smoothing: antialiased;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px; /* Standardized mobile padding */
  }

  /* --- HEADER SECTION --- */
  .header-bg {
    background: linear-gradient(
      135deg,
      rgba(11, 93, 59, 0.08),
      rgba(0, 168, 150, 0.08)
    );
    padding: 60px 0 40px; /* Reduced padding for mobile */
    border-bottom: 1px solid #f1f5f9;

    @media (min-width: 768px) {
      padding: 100px 0 60px;
    }

    h1 {
      color: #064e3b;
      font-size: 28px; /* Scaled down for mobile */
      margin: 0;
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.2;

      @media (min-width: 768px) {
        font-size: 42px;
      }
    }

    .breadcrumbs {
      margin-top: 15px;
      font-size: 0.85rem;
      color: #64748b;
      letter-spacing: 0.5px;
      display: flex;
      flex-wrap: wrap; /* Prevent overflow on very small screens */

      .sep {
        margin: 0 8px;
        opacity: 0.5;
      }
      .active {
        color: #064e3b;
        font-weight: 700;
      }
    }
  }

  .main-content {
    padding: 40px 0; /* Reduced vertical padding */
    @media (min-width: 768px) {
      padding: 100px 0;
    }
  }

  /* --- GRID LAYOUT --- */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr; /* Default to 1 column */
    gap: 30px;
    align-items: start;

    @media (min-width: 968px) {
      grid-template-columns: 1.4fr 0.8fr;
      gap: 60px;
    }
  }

  /* --- FORM CARD --- */
  .form-card {
    background: #ffffff;
    padding: 30px 20px; /* Tighter padding for mobile */
    border-radius: 24px;
    box-shadow: 0 15px 35px -12px rgba(6, 78, 59, 0.08);
    border: 1px solid rgba(226, 232, 240, 0.5);

    @media (min-width: 768px) {
      padding: 60px;
      border-radius: 32px;
      box-shadow: 0 25px 50px -12px rgba(6, 78, 59, 0.08);
    }

    .form-title {
      margin-bottom: 30px;
      h2 {
        color: #064e3b;
        font-size: 1.6rem; /* Smaller for mobile */
        font-weight: 700;
        margin-bottom: 10px;

        @media (min-width: 768px) {
          font-size: 2.2rem;
        }
      }
      .underline {
        width: 50px;
        height: 4px;
        background: #22c1dc;
        border-radius: 10px;
      }
    }
  }

  .row {
    display: grid;
    grid-template-columns: 1fr; /* Stack inputs on mobile */
    gap: 0;

    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
  }

  /* --- INPUT FIELDS --- */
  .input-group {
    margin-bottom: 20px; /* Tighter spacing for mobile */

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 700;
      color: #064e3b;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }

    input,
    textarea {
      width: 100%;
      padding: 14px 16px;
      background-color: #f8fafc;
      border: 2px solid #f1f5f9;
      border-radius: 12px;
      font-size: 16px; /* Prevents iOS auto-zoom on focus */
      color: #1e293b;
      transition: all 0.3s ease;

      &::placeholder {
        color: #94a3b8;
      }

      &:focus {
        outline: none;
        background-color: #ffffff;
        border-color: #22c1dc;
        box-shadow: 0 8px 12px -3px rgba(34, 193, 220, 0.15);
      }
    }
  }

  .submit-btn {
    width: 100%;
    padding: 18px;
    background: linear-gradient(135deg, #22c1dc, #1aa6c8);
    color: white;
    border: none;
    border-radius: 14px;
    font-weight: 800;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 6px 15px rgba(34, 193, 220, 0.3);
    -webkit-tap-highlight-color: transparent; /* Clean mobile tap */

    &:active {
      transform: scale(0.98); /* Tactile feedback */
    }
  }

  /* --- INFO SIDEBAR --- */
  .info-sidebar {
    background: linear-gradient(145deg, #064e3b 0%, #022c22 100%);
    padding: 40px 30px;
    border-radius: 24px;
    color: white;
    height: auto; /* Allow content to dictate height on mobile */
    a {
      color: white;
    }
    @media (min-width: 768px) {
      padding: 60px 50px;
      border-radius: 32px;
    }

    .info-item {
      margin-bottom: 35px;
      &:last-child {
        margin-bottom: 0;
      }

      h3 {
        color: #22c1dc;
        margin-bottom: 8px;
        font-size: 1.1rem;
        font-weight: 700;
      }

      p {
        opacity: 0.85;
        line-height: 1.6;
        font-size: 0.95rem;
      }

      .highlight {
        font-size: 1.4rem; /* Scaled down for mobile */
        font-weight: 800;
        color: white;
        margin: 10px 0;
        display: block;

        @media (min-width: 768px) {
          font-size: 1.8rem;
        }
      }
    }
  }
`;
