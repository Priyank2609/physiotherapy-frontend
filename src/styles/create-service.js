import styled from "styled-components";

export const NewService = styled.div`
  .create-service {
    min-height: 100vh;
    background: #f1f5f9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
  }

  .service-form-container {
    width: 100%;
    max-width: 600px;
    background: #ffffff;
    border-radius: 20px;
    padding: 35px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }

  .service-form-container h2 {
    font-size: 26px;
    font-weight: 800;
    color: #0b5d3b;
    margin-bottom: 6px;
  }

  .service-form-container p {
    font-size: 14px;
    color: #64748b;
    margin-bottom: 30px;
  }

  .service-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    color: #334155;
  }

  .form-group input,
  .form-group textarea {
    padding: 12px 14px;
    font-size: 14px;
    border-radius: 10px;
    border: 1px solid #cbd5f5;
    outline: none;
  }

  .form-group textarea {
    resize: none;
    height: 90px;
  }

  .form-group small {
    font-size: 12px;
    color: #64748b;
    margin-top: 4px;
  }

  .form-row {
    display: flex;
    gap: 15px;
  }

  .form-row .form-group {
    flex: 1;
  }

  .form-group.checkbox {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .submit-btn {
    margin-top: 10px;
    padding: 14px;
    font-size: 15px;
    font-weight: 700;
    background: #0b5d3b;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .submit-btn:hover {
    background: #094c30;
  }

  @media (max-width: 600px) {
    .service-form-container {
      padding: 25px;
    }

    .form-row {
      flex-direction: column;
    }
  }
`;
