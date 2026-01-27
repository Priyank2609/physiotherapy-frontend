import styled from "styled-components";

export const NewServiceWrapper = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 32px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 45px rgba(15, 23, 42, 0.08);

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
      color: #64748b;
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
          color: #334155;
        }

        input,
        textarea {
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
          font-size: 14px;
        }

        .error {
          color: #ef4444;
          font-size: 13px;
        }
      }

      .form-section {
        display: flex;
        flex-direction: column;
        gap: 8px;

        h3 {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #0f172a;
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
          }
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border: 1px dashed #2563eb;
          border-radius: 10px;
          color: #2563eb;
          background: #f0f9ff;
          cursor: pointer;
          font-weight: 600;
          width: fit-content;
        }
      }

      .submit-btn {
        margin-top: 24px;
        padding: 14px 22px;
        background: linear-gradient(135deg, #2563eb, #1e40af);
        color: #fff;
        border: none;
        border-radius: 12px;
        font-weight: 600;
        font-size: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
    }
  }
`;
