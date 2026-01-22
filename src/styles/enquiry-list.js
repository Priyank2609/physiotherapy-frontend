import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const EnquiryWrapper = styled.div`
  background-color: #f8fafc; /* Subtle grey background for premium feel */
  min-height: 100vh;
  padding-bottom: 80px;
  font-family: "Inter", sans-serif;

  /* --- HEADER SECTION --- */
  .page-header-bg {
    background: linear-gradient(
      135deg,
      rgba(11, 93, 59, 0.08),
      rgba(0, 168, 150, 0.08)
    );
    padding: 60px 0 80px;
    border-bottom: 1px solid #e2e8f0;
    margin-bottom: -40px; /* Overlap effect for the dashboard content */
    width: 100%;

    @media (max-width: 768px) {
      padding: 40px 0 60px;
      text-align: center;
    }
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }

  h1 {
    color: #064e3b;
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.03em;
  }

  p {
    color: #64748b;
    margin-top: 8px;
    font-size: 1rem;
    font-weight: 500;
  }

  .refresh-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #0ea5e9;
    color: white;
    border: 1px solid #d1fae5;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.04);

    &:active {
      transform: scale(0.96);
    }

    @media (max-width: 768px) {
      // width: 100%;
      justify-content: center;
    }
  }

  /* --- DASHBOARD CONTAINER --- */
  .dashboard-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 10;

    @media (max-width: 640px) {
      padding: 0 16px;
    }
  }

  .table-card {
    background: transparent; /* Transparent on mobile for card look */
    border-radius: 20px;
    overflow: hidden;
    animation: ${fadeIn} 0.6s ease-out;

    @media (min-width: 992px) {
      background: white;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
      border: 1px solid #f1f5f9;
    }
  }

  /* --- RESPONSIVE TABLE TRANSFORMATION --- */
  .enquiry-table {
    width: 100%;
    border-collapse: collapse;

    /* Desktop View */
    @media (min-width: 992px) {
      display: table;

      thead {
        display: table-header-group;
        background-color: #f8fafc;
        th {
          padding: 20px 24px;
          color: #064e3b;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          border-bottom: 2px solid #f1f5f9;
        }
      }

      tbody tr {
        display: table-row;
        border-bottom: 1px solid #f1f5f9;
        transition: background 0.2s;
        &:hover {
          background-color: #f0fdf4;
        }
        td {
          padding: 24px;
          vertical-align: middle;
        }
      }
    }

    /* Mobile "Card" View */
    @media (max-width: 991px) {
      display: block;

      thead {
        display: none;
      } /* Hide headers on mobile */

      tbody {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      tr {
        display: block;
        background: white;
        border-radius: 20px;
        padding: 24px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
        border: 1px solid #edf2f7;
        position: relative;
      }

      td {
        display: block;
        padding: 10px 0;
        border: none;

        /* Add labels before data on mobile */
        &:before {
          content: attr(data-label);
          display: block;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #94a3b8;
          margin-bottom: 4px;
          letter-spacing: 0.05em;
        }
      }
    }
  }

  /* --- CELL STYLING --- */
  .user-cell {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 700;
    color: #1e293b;
    font-size: 1.05rem;

    .avatar-icon {
      background: #e0f2fe;
      color: #0ea5e9;
      padding: 8px;
      border-radius: 10px;
      display: flex;
    }
  }

  .contact-cell {
    display: flex;
    flex-direction: column;
    gap: 8px;

    div {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #475569;
      font-size: 0.95rem;

      svg {
        color: #94a3b8;
        flex-shrink: 0;
      }

      &:hover {
        color: #064e3b;
      }
    }
  }

  .message-cell {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    max-width: 100%; /* Flexible on mobile */
    background: #f8fafc;
    padding: 16px;
    border-radius: 14px;
    border: 1px dashed #e2e8f0;

    @media (min-width: 992px) {
      max-width: 400px;
      background: transparent;
      padding: 0;
      border: none;
    }

    svg {
      color: #94a3b8;
      margin-top: 4px;
      flex-shrink: 0;
    }

    span {
      font-size: 0.95rem;
      color: #475569;
      line-height: 1.6;
      display: block;
    }
  }

  /* --- SCROLLBAR (For Tablet/Small Desktop) --- */
  .table-scroll {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background: #f1f5f9;
    }
    &::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 10px;
    }
  }
`;
