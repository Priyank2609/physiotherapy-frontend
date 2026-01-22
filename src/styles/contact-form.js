import styled from "styled-components";

export const ContactWrapper = styled.section`
  background: #ffffff;
  -webkit-font-smoothing: antialiased;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  /* --- HEADER SECTION --- */
  .header-bg {
    background: linear-gradient(
      135deg,
      rgba(11, 93, 59, 0.08),
      rgba(0, 168, 150, 0.08)
    );
    padding: 100px 0 60px;
    border-bottom: 1px solid #f1f5f9;

    h1 {
      color: #064e3b;
      font-size: 42px;
      margin: 0;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .breadcrumbs {
      margin-top: 15px;
      font-size: 0.9rem;
      color: #64748b;
      letter-spacing: 0.5px;

      .sep {
        margin: 0 12px;
        opacity: 0.5;
      }
      .active {
        /* UPDATED: Changed from purple to theme blue */
        color: #064e3b;
        font-weight: 700;
      }
    }
  }

  .main-content {
    padding: 100px 0;
  }

  /* --- GRID LAYOUT --- */
  .contact-grid {
    display: grid;
    grid-template-columns: 1.4fr 0.8fr;
    gap: 60px;
    align-items: start;

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  /* --- FORM CARD --- */
  .form-card {
    background: #ffffff;
    padding: 60px;
    border-radius: 32px;
    box-shadow: 0 25px 50px -12px rgba(6, 78, 59, 0.08);
    border: 1px solid rgba(226, 232, 240, 0.5);

    .form-title {
      margin-bottom: 45px;
      h2 {
        color: #064e3b;
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 12px;
      }
      .underline {
        width: 60px;
        height: 5px;
        background: #22c1dc; /* Theme blue */
        border-radius: 10px;
      }
    }
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }

  /* --- INPUT FIELDS --- */
  .input-group {
    margin-bottom: 28px;

    label {
      display: block;
      margin-bottom: 10px;
      font-weight: 700;
      color: #064e3b;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    input,
    textarea {
      width: 100%;
      padding: 16px 20px;
      background-color: #f8fafc;
      border: 2px solid #f1f5f9;
      border-radius: 12px;
      font-size: 1rem;
      color: #1e293b;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &::placeholder {
        color: #94a3b8;
      }

      &:focus {
        outline: none;
        background-color: #ffffff;
        border-color: #0ea5e9; /* Theme blue */
        box-shadow: 0 10px 15px -3px rgba(14, 165, 233, 0.15);
        transform: translateY(-2px);
      }
    }
  }

  /* --- UPDATED BUTTON --- */
  .submit-btn {
    width: 100%;
    padding: 20px;

    background: linear-gradient(135deg, #22c1dc, #1aa6c8);
    color: white;
    border: none;
    border-radius: 14px;
    font-weight: 800;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 8px 20px rgba(34, 193, 220, 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(34, 193, 220, 0.5);
    }
  }

  /* --- INFO SIDEBAR --- */
  .info-sidebar {
    background: linear-gradient(145deg, #064e3b 0%, #022c22 100%);
    padding: 60px 50px;
    border-radius: 32px;
    color: white;
    box-shadow: 0 20px 40px rgba(2, 44, 34, 0.2);
    height: 100%;

    .info-item {
      margin-bottom: 45px;
      &:last-child {
        margin-bottom: 0;
      }

      h3 {
        color: #22c1dc; /* Theme blue */
        margin-bottom: 12px;
        font-size: 1.3rem;
        font-weight: 700;
      }

      p {
        opacity: 0.85;
        line-height: 1.8;
        font-size: 1.05rem;
        margin: 0;
      }

      .highlight {
        font-size: 1.8rem;
        font-weight: 800;
        color: white;
        margin: 15px 0;
        display: block;
      }
    }
  }
`;
