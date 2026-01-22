import styled from "styled-components";

export const AppointmentWrapper = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  padding-bottom: 60px;
  .page-header-bg {
    background: linear-gradient(
      135deg,
      rgba(11, 93, 59, 0.08),
      rgba(0, 168, 150, 0.08)
    );
    padding: 60px 0;
    border-bottom: 1px solid #e6efec;
    margin-bottom: 40px;
  }

  .header-content {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: #064e3b;
      font-size: 2.2rem;
      font-weight: 800;
      margin: 0;
    }
    p {
      color: #64748b;
      margin-top: 5px;
    }
  }

  .dashboard-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .refresh-btn {
    background-color: #0ea5e9;
    color: white;
    padding: 12px 24px;
    border-radius: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.2);
  }

  .table-card {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 900px;
  }

  thead {
    background: #f0fdfa;
  }

  th {
    text-align: left;
    padding: 16px;
    font-size: 13px;
    color: #0f766e;
    font-weight: 600;
    text-transform: uppercase;
  }

  td {
    padding: 16px;
    font-size: 14px;
    color: #374151;
    border-top: 1px solid #e5e7eb;
    vertical-align: middle;
  }

  tr:hover {
    background: #f9fafb;
  }

  .patient-name {
    font-weight: 600;
  }

  .sub-text {
    display: block;
    font-size: 12px;
    color: #6b7280;
    margin-top: 4px;
  }

  .service-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .service-tag {
    background: #e0f2fe;
    color: #0369a1;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
    width: fit-content;
  }

  .doc-text {
    font-size: 13px;
    color: #374151;
  }

  .date-time {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 13px;
  }

  .status-badge {
    padding: 6px 12px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    text-transform: capitalize;
    display: inline-block;
    width: fit-content;
  }

  .status-badge.pending {
    background: #fef3c7;
    color: #92400e;
  }

  .status-badge.confirmed {
    background: #dcfce7;
    color: #166534;
  }

  .status-badge.completed {
    background: #e0f2fe;
    color: #075985;
  }

  .status-badge.cancelled {
    background: #fee2e2;
    color: #991b1b;
  }

  .status-select {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    font-size: 13px;
    background: #ffffff;
    cursor: pointer;
    transition: 0.2s ease;

    &:focus {
      outline: none;
      border-color: #0d9488;
      box-shadow: 0 0 0 2px rgba(13, 148, 136, 0.2);
    }
  }

  @media (max-width: 768px) {
    .header-content {
      display: flex;
      flex-direction: column;
      // align-items: flex-start;
      gap: 12px;
    }
  }
  /* Base Screen for both states */
  .status-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    padding: 20px;
    background: #ffffff;
  }
`;

export const Wrapper = styled.div`
  /* --- LOADING STYLES --- */
  .loader-wrapper {
    text-align: center;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid rgba(34, 193, 220, 0.1);
    border-left-color: #22c1dc; /* Your Theme Cyan */
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }

  .loading-text {
    color: #064e3b; /* Your Theme Green */
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  /* --- ERROR STYLES --- */
  .error-card {
    max-width: 400px;
    text-align: center;
    padding: 40px;
    background: #fffafa;
    border: 1px solid #fee2e2;
    border-radius: 24px;
  }

  .error-icon {
    width: 60px;
    height: 60px;
    background: #ef4444;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: bold;
    margin: 0 auto 20px;
  }

  .error-title {
    color: #064e3b;
    margin-bottom: 10px;
  }

  .error-msg {
    color: #64748b;
    margin-bottom: 25px;
    line-height: 1.5;
  }

  .retry-button {
    background: #064e3b;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .retry-button:hover {
    transform: translateY(-2px);
    background: #043a2c;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
