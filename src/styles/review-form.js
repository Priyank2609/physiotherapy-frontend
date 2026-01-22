import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const PageWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  overflow-x: hidden; /* Prevent horizontal scroll on mobile */
`;

export const HeaderBg = styled.header`
  background: linear-gradient(
    135deg,
    rgba(11, 93, 59, 0.05),
    rgba(0, 168, 150, 0.05)
  );
  padding: 60px 20px;
  text-align: center;
  h1 {
    color: #064e3b;
    font-size: 2.2rem;
    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 600px;
  margin: -40px auto 40px;
  padding: 0 15px;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const FormCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 30px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const InputGroup = styled.div`
  margin-bottom: 20px;
  width: 100%; /* Ensures the group stays within the card */

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 0.9rem;
    color: #334155;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    font-size: 1rem;
    color: #1e293b;
    box-sizing: border-box; /* Critical: includes padding in the width calculation */

    /* Prevents iOS auto-zoom on focus */
    @media (max-width: 768px) {
      font-size: 16px;
    }

    &:focus {
      outline: none;
      border-color: #0ea5e9;
      background: #ffffff;
    }
  }

  select {
    width: 100%;
    height: 48px; /* Added for consistency */
    padding: 12px 15px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    font-size: 16px;
    color: #1e293b; /* Match input text color */
    box-sizing: border-box;
    appearance: auto;
    -webkit-appearance: auto;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: #0ea5e9;
      background: #ffffff;
    }
  }

  /* Styling the dropdown items for browsers that support it */
  optgroup {
    font-weight: 700;
    color: #064e3b;
    background: #f1f5f9;
  }
`;

export const RatingBox = styled.div`
  margin-bottom: 25px;
  .stars {
    display: flex;
    justify-content: center;
    gap: 10px;
    @media (max-width: 400px) {
      gap: 5px;
    }
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #0ea5e9;
  color: white;
  padding: 14px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #0284c7;
  }

  &:active {
    transform: scale(0.98); /* Button "sinks" slightly when tapped */
    background-color: #0369a1;
  }
`;

export const ErrorMsg = styled.span`
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 4px;
  display: block;
`;
