import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: #ffffff;
`;

export const HeroSection = styled.section`
  background-color: #f8fafc;
  padding: 80px 0 60px;
  border-bottom: 1px solid #eef2f6;

  .container {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .breadcrumb {
    font-size: 0.85rem;
    color: #94a3b8;
    margin-bottom: 40px;
    span {
      color: #064e3b;
      font-weight: 600;
    }
  }

  .profile-header {
    display: flex;
    gap: 60px;
    align-items: center;
    @media (max-width: 992px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .image-container {
    flex-shrink: 0;
    position: relative;
    img {
      width: 320px;
      height: 400px;
      object-fit: cover;
      object-position: center top;
      border-radius: 20px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      border: 4px solid white;
    }
    .experience-tag {
      position: absolute;
      bottom: 20px;
      right: -20px;
      background: #064e3b;
      color: white;
      padding: 12px 20px;
      border-radius: 12px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 10px 20px rgba(6, 78, 59, 0.3);
    }
  }

  .header-info {
    h1 {
      font-size: 3rem;
      color: #064e3b;
      margin-bottom: 12px;
      font-weight: 800;
    }
    .specialty-label {
      font-size: 1.2rem;
      color: #64748b;
      margin-bottom: 30px;
    }
    .qual-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      .qual-item {
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 500;
        color: #334155;
      }
    }
  }

  .icon-teal {
    color: #064e3b;
  }

  @media (max-width: 450px) {
    .header-info h1 {
      font-size: 2rem;
    }
  }
`;

// export const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 360px;
//   gap: 60px;
//   margin: 60px auto 120px;
//   max-width: 1140px;
//   padding: 0 24px;
//   @media (max-width: 992px) {
//     grid-template-columns: 1fr;
//   }
// `;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 60px;
  margin: 60px auto 120px;
  max-width: 1140px;
  padding: 0 24px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin: 40px auto 80px;
    gap: 40px;
  }
`;

export const MainContent = styled.div`
  .section-head {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 25px;
    h3 {
      font-size: 1.8rem;
      color: #064e3b;
      font-weight: 700;
      @media (max-width: 480px) {
        font-size: 1.5rem;
      }
    }
  }

  .bio-paragraph {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 60px;
    @media (max-width: 768px) {
      margin-bottom: 40px;
    }
  }

  .conditions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    margin-bottom: 60px;
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
      margin-bottom: 40px;
    }
  }

  .condition-pill {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    padding: 16px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    transition: all 0.3s ease;
    .icon-blue {
      color: #0ea5e9;
    }
  }

  .neuro-box {
    background: #f8fafc;
    padding: 40px;
    border-radius: 24px;
    border: 1px solid #eef2f6;
    @media (max-width: 480px) {
      padding: 25px 20px;
    }
    .neuro-list {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .neuro-item {
      background: white;
      padding: 10px 18px;
      border-radius: 8px;
      font-weight: 600;
      color: #064e3b;
      border: 1px solid #e2e8f0;
      font-size: 0.95rem;
    }
  }
`;

// export const MainContent = styled.div`
//   .section-head {
//     display: flex;
//     align-items: center;
//     gap: 15px;
//     margin-bottom: 25px;
//     h3 {
//       font-size: 1.8rem;
//       color: #064e3b;
//       font-weight: 700;
//     }
//   }

//   .bio-paragraph {
//     font-size: 1.15rem;
//     line-height: 1.8;
//     color: #475569;
//     margin-bottom: 60px;
//   }

//   .conditions-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
//     gap: 16px;
//     margin-bottom: 60px;
//   }

//   .condition-pill {
//     background: #ffffff;
//     border: 1px solid #e2e8f0;
//     padding: 16px;
//     border-radius: 12px;
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     font-weight: 500;
//     transition: all 0.3s ease;
//     .icon-blue {
//       color: #0ea5e9;
//     }
//   }

//   .neuro-box {
//     background: #f8fafc;
//     padding: 40px;
//     border-radius: 24px;
//     border: 1px solid #eef2f6;
//     .neuro-list {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 12px;
//     }
//     .neuro-item {
//       background: white;
//       padding: 10px 18px;
//       border-radius: 8px;
//       font-weight: 600;
//       color: #064e3b;
//       border: 1px solid #e2e8f0;
//     }
//   }
// `;

export const Sidebar = styled.aside`
  .sticky-card {
    position: sticky;
    top: 100px;
    background: white;
    padding: 40px;
    border-radius: 24px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
    border: 1px solid #f1f5f9;

    h4 {
      font-size: 1.4rem;
      margin-bottom: 30px;
      font-weight: 800;
      color: #0f172a;
    }

    .time-rows {
      margin-bottom: 35px;
      .time-row {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 18px;
        color: #475569;
        font-weight: 500;
      }
    }

    .booking-btn {
      width: 100%;
      background: #0ea5e9;
      color: white;
      padding: 18px;
      border-radius: 10px;
      border: none;
      font-weight: 700;
      font-size: 1.1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .note {
      text-align: center;
      margin-top: 20px;
      font-size: 0.85rem;
      color: #94a3b8;
    }
  }
`;
