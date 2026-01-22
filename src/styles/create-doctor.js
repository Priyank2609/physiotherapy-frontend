import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const AdminPageWrapper = styled.div`
  background: radial-gradient(circle at top right, #f0fdf4 0%, #f8fafc 100%);
  min-height: 100vh;

  padding: clamp(20px, 5vw, 60px) clamp(10px, 3vw, 20px);
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
`;

export const FormContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);

  padding: clamp(30px, 6vw, 60px);
  border-radius: clamp(20px, 4vw, 40px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow:
    0 25px 50px -12px rgba(6, 78, 59, 0.08),
    0 0 0 1px rgba(6, 78, 59, 0.02);
  animation: ${fadeInUp} 0.6s ease-out;

  header {
    text-align: center;
    margin-bottom: clamp(30px, 5vw, 60px);

    h2 {
      color: #064e3b;
      font-weight: 900;

      font-size: clamp(1.8rem, 4vw, 2.6rem);
      letter-spacing: -1px;
      margin-bottom: 12px;
    }

    p {
      color: #64748b;
      font-size: clamp(0.95rem, 2vw, 1.1rem);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }
`;

export const SectionDivider = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: clamp(10px, 2vw, 20px);
  margin: 40px 0 10px;

  span {
    font-size: 0.7rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #059669;
    background: #ecfdf5;
    padding: 6px 16px;
    border-radius: 100px;
    white-space: nowrap;
    border: 1px solid #dcfce7;
  }

  &::after {
    content: "";
    height: 1px;
    flex: 1;
    background: linear-gradient(to right, #e2e8f0, transparent);
  }
`;

export const FormGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: clamp(20px, 3vw, 35px);

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  grid-column: ${(props) => (props.$fullWidth ? "1 / -1" : "auto")};

  @media (max-width: 850px) {
    grid-column: 1 / -1;
  }

  label {
    font-weight: 700;
    color: #0f172a;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  input,
  textarea {
    padding: 14px 18px;
    border: 2px solid #f1f5f9;
    border-radius: 14px;
    background: #f8fafc;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #10b981;
      background: white;
      box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.1);
      transform: translateY(-2px);
    }
  }
`;

export const ListInputSection = styled.div`
  grid-column: 1 / -1;
  background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
  padding: clamp(20px, 4vw, 40px);
  border-radius: 24px;
  border: 1px solid #dcfce7;

  label {
    color: #064e3b;
    font-weight: 800;
    font-size: 1rem;
    margin-bottom: 20px;
    display: block;
  }

  .array-row {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;

    input {
      flex: 1;
      background: white;
      min-width: 0; 
    }

    button {
      flex-shrink: 0; 
      width: 48px;
      height: 48px;
      background: #fff;
      color: #f87171;
      border: 1px solid #fee2e2;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }

  .add-btn {
    width: 100%; /
    justify-content: center;
    background: white;
    color: #059669;
    border: 2px solid #10b981;
    padding: 12px;
    border-radius: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    @media (min-width: 600px) {
      width: auto;
    }
  }
`;

export const CheckboxGroup = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 12px;
  background: #f8fafc;
  padding: clamp(15px, 3vw, 25px);
  border-radius: 16px;

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #334155;
    padding: 8px;
    background: white;
    border-radius: 10px;
    border: 1px solid #f1f5f9;

    input {
      width: 18px;
      height: 18px;
      accent-color: #10b981;
    }
  }
`;

export const ImageUploadZone = styled.div`
  grid-column: 1 / -1;
  border: 2px dashed #cbd5e1;
  background: #f8fafc;
  padding: clamp(30px, 5vw, 50px);
  border-radius: 24px;
  text-align: center;

  .icon-circle {
    width: 50px;
    height: 50px;
    background: white;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #10b981;
    border-radius: 50%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  span {
    font-weight: 700;
    display: block;
    font-size: 0.95rem;
  }

  p {
    font-size: 0.8rem;
    color: #64748b;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: clamp(30px, 5vw, 60px);
  padding: clamp(18px, 3vw, 24px);
  background: #064e3b;
  color: white;
  border: none;
  border-radius: 18px;
  font-weight: 800;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #059669;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;
