import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const DetailsWrapper = styled.div`
  min-height: 100vh;
  padding: 20px 15px; /* Reduced padding for mobile */
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  width: 100%;
  max-width: 700px;
  border-radius: 16px; /* Slightly smaller radius for mobile */
  padding: 24px; /* Compact padding */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: ${fadeIn} 0.6s ease-out;

  @media (min-width: 768px) {
    border-radius: 24px;
    padding: 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column; /* Stack header on small screens */
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 30px;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 20px;

  h2 {
    color: #064e3b;
    font-size: 1.5rem; /* Smaller font for mobile */
    font-weight: 700;
    margin: 0;
  }

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 1.8rem;
    }
  }
`;

export const Status = styled.span`
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  background: ${(props) => {
    if (props.type === "pending") return "#fef3c7";
    if (props.type === "confirmed") return "#dcfce7";
    return "#fee2e2";
  }};
  color: ${(props) => {
    if (props.type === "pending") return "#92400e";
    if (props.type === "confirmed") return "#166534";
    return "#991b1b";
  }};
`;

export const Section = styled.section`
  margin-bottom: 24px;
  animation: ${fadeIn} 0.8s ease-out;

  h3 {
    color: #1e293b;
    font-size: 1rem;
    margin-bottom: 12px;
    display: flex;
    align-items: center;

    &:after {
      content: "";
      flex: 1;
      height: 1px;
      background: #e2e8f0;
      margin-left: 10px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column; /* Stacked by default for mobile */
  gap: 4px;
  padding: 10px 0;
  border-bottom: 1px solid #f8fafc; /* Subtle separators for better scannability */

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 140px 1fr;
    border-bottom: none;

    &:hover {
      padding-left: 8px;
      background: rgba(241, 245, 249, 0.5);
      border-radius: 8px;
    }
  }
`;

export const Label = styled.span`
  color: #64748b;
  font-weight: 500;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;

  @media (min-width: 480px) {
    font-size: 0.95rem;
    text-transform: none;
  }
`;

export const Value = styled.span`
  color: #0f172a;
  font-weight: 600;
  font-size: 1rem;
  word-break: break-word; /* Prevents long emails/IDs from breaking layout */
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column; /* Stack buttons on mobile */
  gap: 12px;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #f1f5f9;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Button = styled.button`
  width: 100%; /* Full width for easy tapping */
  padding: 14px 24px;
  border-radius: 12px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  -webkit-tap-highlight-color: transparent;

  ${(props) => props.$confirm && `background: #10b981; color: white;`}
  ${(props) => props.$cancel && `background: #ef4444; color: white;`}
  ${(props) => props.$complete && `background: #3b82f6; color: white;`}

  &:active {
    transform: scale(0.98);
    filter: brightness(0.9);
  }

  @media (min-width: 480px) {
    flex: 1;
    font-size: 0.95rem;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
`;
