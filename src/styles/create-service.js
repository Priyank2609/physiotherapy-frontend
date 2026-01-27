import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const NewServiceWrapper = styled.div`
  background-color: #f8fafc;
  min-height: 100vh;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;

  @media (max-width: 640px) {
    padding: 20px 10px;
    background-color: #ffffff;
  }

  .form-card {
    background: #ffffff;
    width: 100%;
    max-width: 900px;
    padding: 50px;
    border-radius: 32px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
    animation: ${slideIn} 0.6s ease-out;

    @media (max-width: 768px) {
      padding: 30px 20px;
      border-radius: 24px;
    }
    @media (max-width: 480px) {
      padding: 20px 15px;
      box-shadow: none;
    }

    h2 {
      color: #064e3b;
      font-size: 2.2rem;
      font-weight: 800;
      margin-bottom: 8px;
    }

    p {
      color: #475569;
      font-size: 0.95rem;
      margin-bottom: 24px;
    }

    .service-form {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 6px;

        label {
          font-weight: 700;
          color: #1e293b;
          font-size: 0.9rem;
        }

        input,
        textarea,
        select {
          padding: 14px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 16px;
          font-size: 1rem;
          background: #ffffff;
          transition: all 0.25s ease;

          &:focus {
            outline: none;
            border-color: #064e3b;
            box-shadow: 0 0 0 4px rgba(6, 78, 59, 0.1);
          }
        }

        .error {
          color: #ef4444;
          font-size: 13px;
        }
      }

      .form-section {
        margin-top: 20px;
        padding: 25px;
        background: #f8fafc;
        border-radius: 24px;
        border: 1px solid #e2e8f0;

        h3 {
          color: #064e3b;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dynamic-item {
          background: #ffffff;
          padding: 18px;
          border-radius: 20px;
          margin-bottom: 16px;
          position: relative;
          border: 1.5px solid #e2e8f0;

          .remove-btn {
            position: absolute;
            top: -10px;
            right: -10px;
            background: #ef4444;
            color: white;
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 6px 12px rgba(239, 68, 68, 0.2);

            @media (max-width: 640px) {
              top: 10px;
              right: 10px;
            }
          }

          input {
            flex: 1;
            padding: 12px;
            border-radius: 12px;
            border: 1px solid #cbd5e1;
            background: #f8fafc;
            font-size: 14px;
          }
        }

        .add-btn {
          background: rgba(6, 78, 59, 0.03);
          color: #064e3b;
          border: 2px dashed #064e3b;
          padding: 14px;
          border-radius: 16px;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;

          &:active {
            transform: scale(0.97);
            background: rgba(6, 78, 59, 0.08);
          }
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
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 10px 20px rgba(6, 78, 59, 0.2);
        margin-top: 24px;
        transition: all 0.2s ease;

        &:active {
          transform: scale(0.96);
        }

        &:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      }
    }
  }
`;
