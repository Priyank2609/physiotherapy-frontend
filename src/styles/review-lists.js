import styled from "styled-components";

export const Container = styled.div`
  background-color: #f9fafb;
  min-height: 100vh;
  padding-bottom: 60px;

  /* --- FULL WIDTH HEADER (Matches Images) --- */
  .page-header-bg {
    background: linear-gradient(
      135deg,
      rgba(11, 93, 59, 0.08),
      rgba(0, 168, 150, 0.08)
    );
    padding: 60px 0;
    margin-bottom: 40px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .header-content {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title-section {
      h2 {
        color: #064e3b;
        font-size: 2.5rem;
        font-weight: 800;
        margin: 0;
        letter-spacing: -0.02em;
      }
      p {
        color: #64748b;
        margin-top: 8px;
        font-size: 1.1rem;
      }
    }
  }

  /* --- GLASSY STATS SECTION --- */
  .header-stats {
    display: flex;
    gap: 15px;

    .stat-item {
      background-color: #0ea5e9;
      backdrop-filter: blur(10px);
      padding: 15px 25px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      text-align: center;
      min-width: 120px;

      .stat-value {
        display: block;
        color: #ffffff;
        font-size: 1.8rem;
        font-weight: 800;
      }
      .stat-label {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.75rem;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.05em;
      }
    }
  }

  /* --- CONTENT WRAPPER --- */
  .dashboard-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* --- MOBILE HEADER RESPONSIVENESS --- */
  @media (max-width: 768px) {
    .page-header-bg {
      padding: 40px 0;
    }

    .header-content {
      flex-direction: column;
      text-align: center;
      gap: 24px;

      .title-section h2 {
        font-size: 1.8rem;
      }

      .title-section p {
        font-size: 0.95rem;
      }
    }

    .header-stats {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const AdminCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => (props.$approved ? "#e2e8f0" : "#ffedd5")};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  .review-main {
    display: grid;
    grid-template-columns: 200px 1fr auto;
    gap: 30px;
    align-items: center;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 12px;

    .avatar-wrapper {
      background: #f0fdf4;
      padding: 10px;
      border-radius: 12px;
      color: #059669;
    }

    h4 {
      margin: 0;
      color: #1e293b;
      font-size: 1.1rem;
      font-weight: 700;
    }
    span {
      color: #64748b;
      font-size: 0.85rem;
    }
  }

  .content {
    .stars {
      display: flex;
      gap: 4px;
      margin-bottom: 8px;
    }
    p {
      color: #475569;
      line-height: 1.6;
      font-style: italic;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;

    .review-main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    div:last-child {
      width: 100%;
      align-items: flex-start !important;
      border-top: 1px solid #f1f5f9;
      padding-top: 20px;
      margin-top: 10px;
    }
  }
`;

export const StatusBadge = styled.span`
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${(props) => (props.$approved ? "#dcfce7" : "#fff7ed")};
  color: ${(props) => (props.$approved ? "#15803d" : "#9a3412")};
  margin-bottom: 12px;
  display: inline-block;
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    button {
      flex: 1;
      height: 45px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 18px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.85rem;
    cursor: pointer;
    transition: 0.2s;
    border: none;

    &.approve {
      background: #064e3b;
      color: white;
      &:disabled {
        background: #e2e8f0;
        color: #94a3b8;
      }
    }

    &.reject {
      background: #ffffff;
      color: #ef4444;
      border: 1px solid #fee2e2;
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    &:active {
      transform: scale(0.96);
    }
  }
`;
