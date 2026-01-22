import styled from "styled-components";

export const AboutWrapper = styled.div`
  .about-hero {
    background: #f0f7f5;
    padding: 100px 20px;
    text-align: left;

    @media (max-width: 768px) {
      padding: 60px 20px;
      text-align: center;
    }
  }

  .about-hero .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-hero h1 {
    font-size: 48px;
    color: #155d3b;
    margin-bottom: 15px;
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 36px;
    }
    @media (max-width: 480px) {
      font-size: 32px;
    }
  }

  .about-hero p {
    color: #555;
    font-size: 18px;
    margin-bottom: 25px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .breadcrumbs {
    font-size: 0.85rem;
    color: #7b8c8f;
    // display: flex;
    align-items: center;

    .sep {
      margin: 0 10px;
    }

    .active {
      color: #0b5d3b;
      font-weight: 700;
    }
  }

  .about-content {
    display: flex;
    flex-wrap: wrap;
    gap: 80px;
    max-width: 1200px;
    margin: 80px auto;
    padding: 0 20px;
    align-items: flex-start;

    @media (max-width: 1024px) {
      gap: 40px;
      margin: 40px auto;
    }
  }

  .about-left {
    flex: 1 1 500px;
  }

  .main-intro {
    font-size: 20px;
    color: #444;
    line-height: 1.8;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    margin-bottom: 40px;

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }

  .grid-card {
    background: #ffffff;
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.06);
    border-bottom: 5px solid #155d3b;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
  }

  .grid-card.full-width {
    grid-column: span 2;
    @media (max-width: 650px) {
      grid-column: span 1;
    }
  }

  .icon-box {
    font-size: 32px;
    margin-bottom: 20px;
    background: #e8f3ee;
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
  }

  .values-list {
    margin-top: 17px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  p {
    margin-top: 10px;
  }

  .value-tag {
    background: #f0f7f5;
    color: #155d3b;
    padding: 10px 22px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 14px;
    border: 1px solid #d1e5dd;
    transition: 0.3s;

    &:hover {
      background: #155d3b;
      color: #fff;
    }
  }

  .about-right {
    flex: 1 1 400px;
    position: sticky;
    top: 100px;

    @media (max-width: 992px) {
      position: relative;
      top: 0;
      order: -1;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 60px;
    }
  }

  .main-img-container {
    position: relative;
    width: 100%;
    max-width: 500px;
  }

  .main-img-container img {
    width: 100%;
    height: auto;
    border-radius: 30px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    object-fit: cover;
  }

  .experience-badge {
    position: absolute;
    bottom: -30px;
    right: -30px;
    background: #155d3b;
    color: white;
    padding: 30px;
    border-radius: 25px;
    text-align: center;
    min-width: 140px;
    box-shadow: 0 15px 30px rgba(21, 93, 59, 0.4);

    @media (max-width: 1200px) {
      right: -10px;
      padding: 20px;
    }

    @media (max-width: 480px) {
      bottom: -20px;
      right: 20px;
      padding: 15px;
      min-width: 110px;
    }
  }

  .experience-badge strong {
    font-size: 36px;
    display: block;
    @media (max-width: 480px) {
      font-size: 28px;
    }
  }

  .experience-badge span {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 500;
    @media (max-width: 480px) {
      font-size: 11px;
    }
  }
`;
