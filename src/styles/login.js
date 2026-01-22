import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const LoginSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;

  /* Abstract background shapes for a medical feel */
  &::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    background: rgba(14, 165, 233, 0.05);
    border-radius: 50%;
    top: -100px;
    right: -100px;
  }

  .login-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    width: 100%;
    max-width: 450px;
    padding: 45px;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(6, 78, 59, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.8);
    z-index: 1;

    @media (max-width: 480px) {
      padding: 30px 20px;
    }
  }

  .login-header {
    text-align: center;
    margin-bottom: 35px;

    .icon-box {
      width: 64px;
      height: 64px;
      background: #064e3b;
      color: white;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      animation: ${float} 4s ease-in-out infinite;

      svg {
        width: 32px;
        height: 32px;
      }
    }

    h2 {
      color: #064e3b;
      font-size: 1.8rem;
      font-weight: 800;
      margin-bottom: 8px;
      span {
        color: #0ea5e9;
      }
    }

    p {
      color: #64748b;
      font-size: 0.95rem;
    }
  }

  .login-form {
    .input-field {
      margin-bottom: 20px;

      label {
        display: block;
        font-weight: 700;
        color: #334155;
        margin-bottom: 8px;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      input {
        width: 100%;
        padding: 14px 18px;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        background: #f8fafc;
        font-size: 1rem;
        transition: all 0.3s ease;

        &:focus {
          outline: none;
          border-color: #0ea5e9;
          background: white;
          box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
        }
      }
    }

    .login-btn {
      width: 100%;
      background: #064e3b;
      color: white;
      padding: 16px;
      border-radius: 12px;
      font-weight: 700;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;

      &:hover:not(:disabled) {
        background: #0ea5e9;
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(14, 165, 233, 0.2);
      }

      &:disabled {
        background: #94a3b8;
        cursor: not-allowed;
      }
    }
  }

  .back-link {
    display: block;
    text-align: center;
    margin-top: 25px;
    color: #64748b;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    transition: color 0.2s;

    &:hover {
      color: #064e3b;
    }
  }
`;
