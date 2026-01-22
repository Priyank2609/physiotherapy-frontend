import styled, { keyframes } from "styled-components";

const enter = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

export const Container = styled.div`
  background-color: #f8fafc;
  min-height: 100vh;

  .page-header-bg {
    background: linear-gradient(135deg, #064e3b 0%, #0d9488 100%);
    padding: 50px 0;
    margin-bottom: 30px;
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  .stat-item {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 12px 20px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    .stat-value {
      display: block;
      font-size: 1.5rem;
      font-weight: 800;
    }
    .stat-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      opacity: 0.8;
    }
  }

  .dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px 60px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  /* --- CUSTOM TOAST STYLES --- */
  .custom-toast {
    background: #064e3b;
    color: white;
    padding: 16px 20px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid #0d9488;
    min-width: 300px;
    &.animate-enter {
      animation: ${enter} 0.4s ease-out forwards;
    }
  }

  .toast-icon {
    font-size: 24px;
  }
  .toast-title {
    font-weight: 800;
    margin: 0;
    font-size: 0.95rem;
  }
  .toast-sub {
    margin: 0;
    font-size: 0.8rem;
    opacity: 0.8;
  }
  .toast-close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }
  }
`;
