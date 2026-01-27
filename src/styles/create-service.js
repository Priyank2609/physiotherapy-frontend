import styled from "styled-components";

export const NewServiceWrapper = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 32px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);

  .form-card {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2 {
      font-size: 28px;
      font-weight: 700;
      color: #0f172a;
    }

    p {
      color: #475569;
      font-size: 14px;
      margin-bottom: 20px;
    }

    .service-form {
      display: flex;
      flex-direction: column;
      gap: 16px;

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 6px;

        label {
          font-weight: 600;
          color: #0f172a;
          font-size: 14px;
        }

        input,
        textarea {
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid #cbd5e1;
          background: #f8fafc;
          font-size: 14px;
          transition: all 0.2s ease;

          &:focus {
            border-color: #2563eb;
            outline: none;
            box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
          }
        }

        .error {
          color: #ef4444;
          font-size: 13px;
        }
      }

      .form-section {
        display: flex;
        flex-direction: column;
        gap: 10px;

        h3 {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #0f172a;
          font-size: 16px;
        }

        .dynamic-item {
          display: flex;
          align-items: center;
          gap: 8px;

          input {
            flex: 1;
          }

          button {
            background: none;
            border: none;
            cursor: pointer;
            color: #ef4444;
            transition: color 0.2s ease;

            &:hover {
              color: #dc2626;
            }
          }
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border: 1px dashed #2563eb;
          border-radius: 12px;
          color: #2563eb;
          background: #eff6ff;
          cursor: pointer;
          font-weight: 600;
          width: fit-content;
          transition: all 0.2s ease;

          &:hover {
            background: #dbeafe;
          }
        }
      }

      .submit-btn {
        margin-top: 24px;
        padding: 14px 20px;
        background: #2563eb;
        color: #fff;
        border: none;
        border-radius: 12px;
        font-weight: 600;
        font-size: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background: #1e40af;
        }

        &:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    .service-form {
      .form-section {
        .dynamic-item {
          flex-direction: column;
          align-items: stretch;
        }
      }
    }
  }
`;
