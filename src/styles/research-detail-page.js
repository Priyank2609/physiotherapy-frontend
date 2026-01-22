import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const LoadingState = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #064e3b;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

export const BlogWrapper = styled.div`
  background: #ffffff;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

/* --- HERO SECTION --- */
export const Hero = styled.section`
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 160px 0 220px;
  color: white;
  text-align: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(6, 78, 59, 0.7) 0%,
      rgba(6, 78, 59, 0.95) 100%
    );
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 100px 0 160px;
    background-attachment: scroll;
  }

  .back-link {
    position: relative;
    z-index: 2;
    color: #34d399;
    text-decoration: none;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 30px;
    font-size: 0.9rem;
    transition: 0.3s;

    &:hover {
      transform: translateX(-5px);
      color: white;
    }
  }

  h1 {
    position: relative;
    z-index: 2;
    font-size: clamp(2rem, 7vw, 3.8rem);
    max-width: 900px;
    margin: 0 auto;
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.03em;
    animation: ${fadeIn} 0.8s ease-out;
  }

  .meta {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 25px;
    flex-wrap: wrap;

    span {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.9rem;
      font-weight: 500;
      opacity: 0.9;
    }

    .badge {
      background: #059669;
      padding: 6px 14px;
      border-radius: 100px;
      font-weight: 800;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
`;

/* --- ARTICLE BODY --- */
export const ArticleBody = styled.div`
  background: white;
  margin-top: -120px;
  border-radius: 50px 50px 0 0;
  padding: 80px 0;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    margin-top: -80px;
    border-radius: 30px 30px 0 0;
    padding: 40px 0;
  }

  .lead-text {
    font-size: clamp(1.1rem, 4vw, 1.4rem);
    line-height: 1.8;
    color: #475569;
    margin-bottom: 60px;
    font-style: italic;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 50px;

    &::first-letter {
      font-size: 3.5rem;
      font-weight: 900;
      color: #064e3b;
      float: left;
      margin-right: 12px;
      line-height: 1;
    }
  }

  .emerald-title {
    color: #064e3b;
    font-size: clamp(1.5rem, 5vw, 2.2rem);
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 80px;
    @media (max-width: 768px) {
      margin-top: 40px;
    }
  }

  .section-subtitle {
    color: #64748b;
    margin-top: 8px;
    margin-bottom: 40px;
  }
`;

/* --- CAUSES SECTION --- */
export const CauseSection = styled.div`
  background: #f0fdf4;
  padding: 50px;
  border-radius: 32px;
  border: 1px solid #dcfce7;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin-bottom: 40px;
  }

  h2 {
    color: #064e3b;
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.7rem;
  }

  .causes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 30px;
  }

  .cause-card {
    h4 {
      color: #1e293b;
      margin-bottom: 10px;
      font-weight: 800;
      font-size: 1.2rem;
    }
    p {
      color: #475569;
      line-height: 1.6;
      font-size: 1rem;
    }
  }
`;

/* --- EXERCISE CARDS --- */
export const ExerciseGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ExerciseCard = styled.div`
  background: white;
  border-radius: 24px;
  border: 1px solid #f1f5f9;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 20px;
  }

  .exercise-visual {
    width: 100%;
    height: 320px;
    background: #f8fafc;
    border-radius: 16px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #94a3b8;
      font-weight: 600;
    }
  }

  .exercise-info {
    .type-tag {
      background: #ecfdf5;
      color: #059669;
      padding: 5px 12px;
      border-radius: 6px;
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
    }
    h3 {
      font-size: 1.8rem;
      margin: 15px 0;
      color: #1e293b;
      font-weight: 800;
    }

    .steps-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
      .step-row {
        display: flex;
        gap: 10px;
        svg {
          color: #059669;
          flex-shrink: 0;
          margin-top: 3px;
        }
        p {
          margin: 0;
          color: #475569;
          font-size: 0.95rem;
          line-height: 1.5;
        }
      }
    }

    .doctor-note {
      margin-top: 25px;
      padding: 15px;
      background: #fffbeb;
      border-radius: 12px;
      color: #b45309;
      font-size: 0.85rem;
      border-left: 4px solid #f59e0b;
    }
  }
`;

/* --- TIPS SECTION --- */
export const TipSection = styled.div`
  margin: 100px 0;
  background: #f8fafc;
  padding: 60px;
  border-radius: 40px;

  @media (max-width: 768px) {
    padding: 30px 15px;
    margin: 50px 0;
  }

  h3 {
    color: #064e3b;
    margin-bottom: 30px;
    font-weight: 800;
    font-size: 1.8rem;
  }

  .tips-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .tip-box {
    background: white;
    padding: 25px;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
    display: flex;
    flex-direction: column;
    gap: 10px;

    .tip-header {
      display: flex;
      align-items: center;
      gap: 10px;
      .dot {
        width: 8px;
        height: 8px;
        background: #059669;
        border-radius: 50%;
      }
      h4 {
        margin: 0;
        font-size: 1.1rem;
        color: #1e293b;
      }
    }
    p {
      margin: 0;
      color: #64748b;
      font-size: 0.95rem;
    }
  }
`;

/* --- APPOINTMENT CTA --- */
// export const AppointmentCTA = styled.div`
//   background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
//   padding: 60px;
//   border-radius: 32px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: white;

//   @media (max-width: 950px) {
//     flex-direction: column;
//     text-align: center;
//     gap: 30px;
//     padding: 40px 20px;
//   }

//   .cta-text {
//     h3 {
//       font-size: 2rem;
//       margin-bottom: 10px;
//       font-weight: 800;
//     }
//     p {
//       opacity: 0.9;
//       font-size: 1.1rem;
//     }
//   }

//   .cta-button {
//     background: white;
//     color: #064e3b;
//     padding: 18px 35px;
//     border-radius: 14px;
//     text-decoration: none;
//     font-weight: 800;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     transition: 0.3s;
//     &:hover {
//       background: #f0fdf4;
//       transform: scale(1.05);
//     }
//     @media (max-width: 640px) {
//       width: 100%;
//       justify-content: center;
//     }
//   }
// `;

export const AppointmentCTA = styled.div`
  margin-top: 80px;
  background: #064e3b;
  padding: 40px;
  border-radius: 28px;
  color: white;
  position: relative;
  overflow: hidden;

  /* Decorative background element */
  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 50%;
  }

  .cta-content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    position: relative;
    z-index: 1;
  }

  .cta-text {
    flex: 1;
    h3 {
      font-size: 1.8rem;
      margin-bottom: 12px;
      color: #f0fdf4;
    }
    p {
      font-size: 1.1rem;
      opacity: 0.9;
      line-height: 1.5;
    }
  }

  .cta-actions {
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 280px;
  }

  .cta-button {
    background: #10b981;
    color: white;
    padding: 16px 32px;
    border-radius: 14px;
    text-decoration: none;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    &:hover {
      background: #059669;
      transform: translateY(-2px);
    }
  }

  /* Admin Buttons Styling */
  .admin-cta-tools {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .admin-btn {
    padding: 10px;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    cursor: pointer;
    transition: 0.2s;
    border: 1px solid transparent;
    text-decoration: none;
  }

  .admin-btn.edit {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border-color: rgba(255, 255, 255, 0.2);
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  .admin-btn.delete {
    background: #fee2e2;
    color: #991b1b;
    &:hover {
      background: #fecaca;
    }
  }

  /* Responsive Fixes */
  @media (max-width: 900px) {
    .cta-content-wrapper {
      flex-direction: column;
      text-align: center;
    }

    .cta-text h3 {
      font-size: 1.5rem;
    }
    .cta-actions {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 30px 20px;
    .admin-cta-tools {
      grid-template-columns: 1fr; /* Stack admin buttons on very small phones */
    }
  }
`;
