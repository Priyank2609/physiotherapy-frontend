import styled from "styled-components";

export const Wrapper = styled.div`
  --primary-green: #0b5d3b;
  --accent-cyan: #22a6b3;
  --hero-bg: #f8faf9;
  --error-red: #e74c3c;
  --text-main: #2d3436;
  --border-color: #e2e8f0;

  min-height: 100vh;
  background-color: #ffffff;

  .form-hero {
    background: linear-gradient(
      135deg,
      rgba(11, 93, 59, 0.08),
      rgba(0, 168, 150, 0.08)
    );
    padding: 100px 20px 140px;
    text-align: left;

    .hero-content {
      max-width: 1100px;
      margin: 0 auto;
    }

    h1 {
      font-size: 42px;
      color: var(--primary-green);
      margin: 0;
      font-weight: 700;
    }

    .tagline {
      color: #636e72;
      font-size: 18px;
      margin: 12px 0 20px;
    }
    .sep {
      margin: 0 12px;
      opacity: 0.5;
    }
    .breadcrumbs {
      font-size: 0.85rem;
      color: #a0aec0;
      .active {
        color: var(--primary-green);
        font-weight: 600;
      }
    }
  }

  .container {
    background: #ffffff;
    width: 90%;
    max-width: 850px;
    margin: -80px auto 100px;
    padding: 60px;
    border-radius: 24px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
    position: relative;
    z-index: 10;
    border: 1px solid rgba(0, 0, 0, 0.02);

    @media (max-width: 768px) {
      padding: 40px 20px;
      margin-top: -40px;
    }
  }

  .form-intro {
    text-align: center;
    margin-bottom: 50px;
    h2 {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-main);
    }
    p {
      color: #636e72;
      font-size: 0.95rem;
    }
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &:nth-last-child(2),
    button {
      grid-column: 1 / -1;
    }

    label {
      font-weight: 700;
      font-size: 0.75rem;
      color: var(--primary-green);
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    input,
    select,
    textarea {
      /* CHANGES HERE: Adjusted padding and added min-height */
      padding: 12px 16px;
      min-height: 54px;
      width: 100%;
      border: 1.5px solid var(--border-color);
      border-radius: 12px;
      font-size: 1rem;
      background: #fcfdfe;
      transition: all 0.2s ease;
      color: var(--text-main);
      font-family: inherit;

      &:focus {
        outline: none;
        border-color: var(--accent-cyan);
        box-shadow: 0 0 0 4px rgba(34, 166, 179, 0.1);
      }
    }

    /* Specifically target date and time to ensure icons are aligned */
    input[type="date"],
    input[type="time"] {
      display: flex;
      align-items: center;
      /* Ensures the text is centered vertically in mobile views */
      line-height: normal;
    }

    .error {
      color: var(--error-red) !important;
      font-size: 0.8rem;
      font-weight: 600;
      margin-top: 4px;
      display: block;
      animation: fadeIn 0.3s ease;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    background: var(--accent-cyan);
    color: white;
    padding: 18px;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 20px;

    &:hover {
      background: #1e949f;
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(34, 166, 179, 0.2);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  @media (max-width: 450px) {
    .form-hero h1 {
      font-size: 32px;
    }
    .form-hero .tagline {
      font-size: 15px;
    }
  }
`;
