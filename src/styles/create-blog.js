import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const NewBlogWrapper = styled.div`
  background-color: #f8fafc;
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;

  @media (max-width: 640px) {
    padding: 15px 10px;
    background-color: #ffffff;
  }

  .form-card {
    background: #ffffff;
    width: 100%;
    max-width: 1000px;
    padding: 50px;
    border-radius: 32px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
    animation: ${slideIn} 0.6s ease-out;

    @media (max-width: 768px) {
      padding: 30px 20px;
      border-radius: 24px;
    }
    @media (max-width: 480px) {
      padding: 20px 15px;
      box-shadow: none;
    }
  }

  header {
    text-align: center;
    margin-bottom: 40px;
    border-bottom: 2px solid #f1f5f9;
    padding-bottom: 30px;

    h2 {
      color: #064e3b;
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 10px;
      letter-spacing: -1px;

      @media (max-width: 640px) {
        font-size: 1.8rem;
      }
    }

    .subtitle {
      color: #64748b;
      font-size: 1.1rem;
      @media (max-width: 640px) {
        font-size: 0.95rem;
      }
    }
  }

  .form-section {
    margin-top: 30px;
    padding: 30px;
    background: #f8fafc;
    border-radius: 24px;
    border: 1px solid #e2e8f0;

    @media (max-width: 640px) {
      padding: 20px 15px;
      border-radius: 20px;
      margin-top: 20px;
    }

    h3 {
      color: #064e3b;
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;

    label {
      font-weight: 700;
      color: #1e293b;
      font-size: 0.9rem;
      margin-left: 2px;
    }

    input,
    textarea,
    select {
      padding: 16px;
      border: 2px solid #e2e8f0;
      border-radius: 16px;
      font-size: 1rem;
      transition: all 0.25s ease;
      background: #ffffff;
      -webkit-appearance: none;

      &:focus {
        outline: none;
        border-color: #064e3b;
        box-shadow: 0 0 0 4px rgba(6, 78, 59, 0.1);
      }
    }
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }

  .dynamic-item {
    background: #ffffff;
    padding: 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    position: relative;
    border: 1.5px solid #e2e8f0;

    @media (max-width: 640px) {
      padding: 15px;
      padding-top: 35px;
    }

    .remove-btn {
      position: absolute;
      top: -12px;
      right: -12px;
      background: #ef4444;
      color: white;
      border: none;
      width: 36px;
      height: 36px;
      border-radius: 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 15px rgba(239, 68, 68, 0.2);

      @media (max-width: 640px) {
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
      }
    }
  }

  .add-btn {
    background: rgba(6, 78, 59, 0.03);
    color: #064e3b;
    border: 2px dashed #064e3b;
    padding: 16px;
    border-radius: 16px;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.2s ease;

    &:active {
      transform: scale(0.98);
      background: rgba(6, 78, 59, 0.08);
    }
  }

  .submit-btn {
    width: 100%;
    background: #064e3b;
    color: white;
    padding: 18px;
    border: none;
    border-radius: 20px;
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: 30px;
    box-shadow: 0 10px 20px rgba(6, 78, 59, 0.2);

    @media (max-width: 640px) {
      position: sticky;
      bottom: 10px;
      z-index: 10;
    }

    &:active {
      transform: scale(0.96);
    }
  }
`;
