import styled, { keyframes } from "styled-components";

const colors = {
  primary: "#0a6b5c",
  secondary: "#1abc9c",
  bgLight: "#f8fafb",
  textMain: "#2d3436",
  textMuted: "#636e72",
  white: "#ffffff",
  shadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.5; }
`;

export const DashboardCss = styled.div`
  background: ${colors.bgLight};
`;
export const DashboardWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;

  color: ${colors.textMain};
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const PageTitle = styled.div`
  margin-bottom: 2.5rem;

  h1 {
    font-size: 2.2rem;
    font-weight: 800;
    background: linear-gradient(135deg, #2c3e50 0%, ${colors.primary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: ${colors.textMuted};
    font-size: 1.1rem;
    margin-top: 8px;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const StatCard = styled.div`
  background: ${colors.white};
  padding: 1.5rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  box-shadow: ${colors.shadow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

    border-color: ${colors.primary};
  }
`;

export const CardIcon = styled.div`
  font-size: 1.8rem;
  margin-right: 1.2rem;
  background: linear-gradient(135deg, #f0fdfa 0%, #e0f2f1 100%);
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;
export const LoadingScreen = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f8fafc;

  h3 {
    color: #064e3b;
    margin-top: 20px;
    font-weight: 800;
  }
  p {
    color: #64748b;
    font-size: 0.9rem;
  }
`;

export const PulseLoader = styled.div`
  width: 60px;
  height: 60px;
  background: #0ea5e9;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(14, 165, 233, 0.4);
  animation: ${pulse} 1.5s infinite ease-in-out;
  position: relative;

  &::after {
    content: "✚";
    color: white;
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ErrorContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .error-card {
    max-width: 450px;
    text-align: center;
    background: white;
    padding: 50px;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
    border: 1px solid #fee2e2;

    span {
      font-size: 50px;
      display: block;
      margin-bottom: 20px;
    }
    h2 {
      color: #991b1b;
      margin-bottom: 10px;
      font-weight: 800;
    }
    p {
      color: #64748b;
      margin-bottom: 30px;
      line-height: 1.6;
    }

    button {
      background: #064e3b;
      color: white;
      border: none;
      padding: 12px 30px;
      border-radius: 10px;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        background: #0ea5e9;
      }
    }
  }
`;

export const CardInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 1.8rem;
    font-weight: 800;
    color: ${colors.primary};
  }

  p {
    margin: 0;
    color: ${colors.textMuted};
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: uppercase;
  }
`;

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1.2fr;
  gap: 2rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  background: ${colors.white};
  padding: 2rem;
  border-radius: 24px;
  box-shadow: ${colors.shadow};
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  h2 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 5px;
  }

  span {
    font-size: 0.9rem;
    color: ${colors.textMuted};
    background: #f1f5f9;
    padding: 4px 12px;
    border-radius: 20px;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

  th {
    padding: 15px;
    color: ${colors.textMuted};
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  td {
    padding: 16px;
    background: ${colors.white};
    font-size: 0.95rem;
  }

  tbody tr:hover td {
    background: #f8fbfa;
  }

  @media (max-width: 768px) {
    thead {
      display: none;
    }

    tr {
      display: block;
      padding: 1rem;
      background: ${colors.white};
      border-radius: 15px;
      margin-bottom: 1rem;
    }

    td {
      display: flex;
      justify-content: space-between;

      &:before {
        content: attr(data-label);
        font-weight: 700;
        color: ${colors.primary};
      }
    }
  }
`;

export const Status = styled.span`
  padding: 6px 14px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;

  background: ${(props) =>
    props.type === "confirmed"
      ? "#dcfce7"
      : props.type === "pending"
        ? "#fef9c3"
        : props.type === "completed"
          ? "#dbeafe"
          : "#f1f5f9"};

  color: ${(props) =>
    props.type === "confirmed"
      ? "#15803d"
      : props.type === "pending"
        ? "#a16207"
        : props.type === "completed"
          ? "#1d4ed8"
          : "#475569"};
`;

export const EnquiryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 10px;
`;

export const EnquiryItem = styled.div`
  padding: 1.2rem;
  border-radius: 16px;
  background: #f8fafb;
  border: 1px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.white};
    border-color: ${colors.primary};
  }

  h4 {
    margin: 0;
    color: ${colors.primary};
  }

  p {
    margin: 6px 0;
    font-size: 0.95rem;
  }

  span {
    font-size: 0.75rem;
    color: #94a3b8;
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.$full ? colors.primary : "#3498db")};
  color: white;
  border: none;
  padding: ${(props) => (props.$small ? "8px 16px" : "14px 24px")};
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;
