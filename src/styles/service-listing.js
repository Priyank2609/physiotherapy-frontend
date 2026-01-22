import styled from "styled-components";

export const ServiceList = styled.div`
  background: #ffffff;

  /* =======================
     CONTAINER
  ======================= */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* =======================
     HEADER SECTION
  ======================= */
  .header-bg {
    background: linear-gradient(
      135deg,
      rgba(11, 93, 59, 0.08),
      rgba(0, 168, 150, 0.08)
    );
    padding: 70px 0;
    border-bottom: 1px solid #e6efec;

    h1 {
      font-size: 2.8rem;
      color: #0b5d3b;
      font-weight: 800;
      margin: 0;
    }

    .subtitle {
      color: #5f6f73;
      margin: 10px 0 22px;
      font-size: 1.05rem;
      max-width: 700px;
    }

    .breadcrumbs {
      font-size: 0.85rem;
      color: #7b8c8f;
      display: flex;
      align-items: center;

      .sep {
        margin: 0 10px;
      }

      .active {
        color: #0b5d3b;
        font-weight: 700;
      }
    }
  }

  /* =======================
     GRID SECTION
  ======================= */
  .grid-padding {
    padding: 90px 0;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 45px;
    margin: 0 18px;
  }

  /* =======================
     SERVICE CARD
  ======================= */
  .service-card {
    background: #ffffff;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 22px 55px rgba(0, 0, 0, 0.12);
    }

    .img-box {
      height: 240px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
    }

    &:hover img {
      transform: scale(1.08);
    }

    h3 {
      font-size: 1.3rem;
      color: #0b5d3b;
      margin: 22px 25px 12px;
      font-weight: 800;
    }

    p {
      color: #5f6f73;
      font-size: 0.95rem;
      line-height: 1.7;
      margin: 0 25px 22px;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .link-action {
      margin: 0 25px 26px;
      color: #00a896;
      font-weight: 700;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      text-decoration: none;

      &:hover {
        color: #0b5d3b;
      }
    }
  }

  /* =======================
     LARGE TABLETS (≤1200px)
  ======================= */
  @media (max-width: 1200px) {
    .services-grid {
      gap: 35px;
    }
  }

  /* =======================
     TABLETS (≤992px)
  ======================= */
  @media (max-width: 992px) {
    .header-bg {
      padding: 60px 0;

      h1 {
        font-size: 2.4rem;
      }
    }

    .grid-padding {
      padding: 70px 0;
    }

    .services-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }

    .service-card .img-box {
      height: 220px;
    }
  }

  /* =======================
     MOBILE (≤768px)
  ======================= */
  @media (max-width: 768px) {
    .header-bg {
      padding: 50px 0;
      text-align: center;

      h1 {
        font-size: 2.1rem;
      }

      .breadcrumbs {
        justify-content: center;
      }
    }

    .grid-padding {
      padding: 60px 0;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 25px;
    }

    .service-card {
      &:hover {
        transform: none;
      }
    }

    .service-card .img-box {
      height: 200px;
    }
  }

  /* =======================
     SMALL MOBILE (≤480px)
  ======================= */
  @media (max-width: 480px) {
    .header-bg {
      padding: 40px 0;

      h1 {
        font-size: 1.8rem;
      }

      .subtitle {
        font-size: 0.95rem;
      }
    }

    .service-card h3 {
      font-size: 1.15rem;
      margin: 18px 18px 10px;
    }

    .service-card p {
      font-size: 0.9rem;
      margin: 0 18px 18px;
    }

    .service-card .link-action {
      margin: 0 18px 20px;
    }

    .service-card .img-box {
      height: 180px;
    }
  }
  .no-services {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 60px 20px;

    h3 {
      font-size: 1.6rem;
      color: #0b5d3b;
      margin-bottom: 12px;
    }

    p {
      color: #5f6f73;
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  .status-text {
    text-align: center;
    font-size: 1rem;
    color: #5f6f73;
  }

  .status-text.error {
    color: #c0392b;
  }
`;
