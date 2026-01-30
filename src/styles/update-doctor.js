import styled from "styled-components";
import { motion } from "framer-motion";

export const FormContainer = styled(motion.div)`
  max-width: 1000px;
  margin: 20px auto; /* Reduced margin for mobile */
  padding: 24px; /* Tighter padding on mobile */
  background: #ffffff;
  border-radius: 20px; /* Slightly smaller radius */
  box-shadow: 0 15px 40px rgba(6, 78, 59, 0.07);
  border: 1px solid #f1f5f9;

  /* Desktop Adjustments */
  @media (min-width: 768px) {
    margin: 50px auto;
    padding: 40px;
    border-radius: 28px;
  }

  header {
    margin-bottom: 30px;
    border-bottom: 2px solid #f8fafc;
    padding-bottom: 20px;

    h2 {
      color: #064e3b;
      font-size: 1.6rem; /* Scaled down for mobile */
      font-weight: 800;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }

    p {
      color: #64748b;
      font-size: 0.95rem; /* Scaled down for mobile */
      margin-top: 8px;
    }

    @media (min-width: 768px) {
      margin-bottom: 40px;
      padding-bottom: 25px;
      h2 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Default to single column */
  gap: 20px; /* Smaller gap on mobile */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Use transient prop $fullWidth to fix your previous React error */
  grid-column: ${(props) => (props.$fullWidth ? "1 / -1" : "auto")};

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    color: #064e3b;
    font-size: 0.85rem; /* More compact labels */
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  input,
  textarea {
    padding: 14px; /* Optimized for touch */
    border-radius: 12px;
    border: 1.5px solid #e2e8f0;
    font-size: 16px; /* 16px prevents iOS zoom on focus */
    background: #fdfdfd;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #0ea5e9;
      box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
      background: #fff;
    }
  }

  @media (min-width: 768px) {
    gap: 10px;
    label {
      font-size: 0.95rem;
    }
    input,
    textarea {
      padding: 16px;
    }
  }
  .toggle-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    border-radius: 12px;
    background: #f8fafc;
    border: 1.5px solid #e2e8f0;
    font-weight: 600;
    color: #334155;
  }

  .switch {
    position: relative;
    width: 46px;
    height: 26px;
  }

  .switch input {
    display: none;
  }

  .slider {
    position: absolute;
    inset: 0;
    background: #cbd5e1;
    border-radius: 999px;
    transition: 0.25s;
  }

  .slider::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    left: 3px;
    top: 3px;
    background: white;
    border-radius: 50%;
    transition: 0.25s;
  }

  .switch input:checked + .slider {
    background: #16a34a;
  }

  .switch input:checked + .slider::before {
    transform: translateX(20px);
  }
`;

export const ArraySection = styled.div`
  grid-column: 1 / -1;
  background: #f8fafc;
  padding: 20px; /* Less padding on mobile */
  border-radius: 16px;
  border: 1px solid #edf2f7;

  @media (min-width: 768px) {
    padding: 30px;
    border-radius: 20px;
  }

  .section-label {
    font-weight: 800;
    color: #064e3b;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1rem;
  }

  .array-item {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;

    input {
      flex: 1;
      background: #fff;
      min-width: 0; /* Prevents flex items from overflowing */
    }

    button.remove-btn {
      background: #fee2e2;
      color: #ef4444;
      border: none;
      flex-shrink: 0; /* Keeps button square */
      width: 48px; /* Slightly larger for touch */
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      &:active {
        transform: scale(0.95);
      }
    }
  }

  .add-btn {
    width: 100%; /* Full width button on mobile */
    justify-content: center;
    background: #fff;
    color: #0ea5e9;
    border: 2px dashed #0ea5e9;
    padding: 14px 24px;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
    transition: 0.2s;

    @media (min-width: 768px) {
      width: auto;
    }

    &:hover {
      background: #f0f9ff;
      border-style: solid;
    }
  }
  .days-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 12px;
    margin-top: 12px;
  }

  .day-chip {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1.5px solid #e2e8f0;
    cursor: pointer;
    font-weight: 600;
    color: #475569;
    background: #fff;
    transition: all 0.2s ease;
    user-select: none;
  }

  .day-chip input {
    display: none;
  }

  .day-chip span {
    pointer-events: none;
  }

  .day-chip input:checked + span {
    color: #065f46;
  }

  .day-chip:has(input:checked) {
    background: #ecfdf5;
    border-color: #10b981;
    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.15);
  }

  .day-chip:hover {
    border-color: #94a3b8;
  }
`;

export const SubmitButton = styled(motion.button)`
  width: 100%;
  margin-top: 30px;
  padding: 16px;
  background: #064e3b;
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: 0 10px 25px rgba(6, 78, 59, 0.2);
  -webkit-tap-highlight-color: transparent;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 768px) {
    margin-top: 40px;
    padding: 20px;
    font-size: 1.1rem;
    border-radius: 16px;
  }
`;
