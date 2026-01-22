import styled from "styled-components";

export const NewsSection = styled.section`
  padding: 100px 20px;
  background: #ffffff;
  overflow: hidden; /* Prevents animation overflow on mobile */

  .container {
    max-width: 1300px;
    margin: 0 auto;
  }

  /* HEADER SECTION */
  .section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 70px;
  }

  .tag {
    display: inline-block;
    background: rgba(34, 193, 220, 0.12); /* Softer Teal Overlay */
    color: #0b5d3b; /* Your signature Green */
    padding: 8px 20px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
  }

  .section-header h2 {
    font-size: clamp(28px, 4vw, 40px); /* Responsive sizing */
    color: #0b5d3b;
    margin-bottom: 18px;
    font-weight: 800;
    line-height: 1.2;
  }

  .section-header p {
    font-size: 16px;
    color: #4b5563;
    line-height: 1.8;
  }

  /* GRID SYSTEM */
  .news-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    align-items: stretch;
  }

  /* NEWS CARDS */
  .news-card {
    background: #f8fffc;
    padding: 35px;
    border-radius: 24px;
    border: 1px solid rgba(11, 93, 59, 0.05); /* Subtle Green Border */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    position: relative;
    display: flex;
    flex-direction: column;
    will-change: transform, box-shadow;
  }

  .news-card:hover {
    transform: translateY(-10px);
    background: #ffffff;
    box-shadow: 0 20px 40px rgba(11, 93, 59, 0.08);
    border-color: rgba(34, 193, 220, 0.3);
  }

  .news-card .date {
    font-size: 13px;
    color: #22c1dc; /* Your bright Teal */
    font-weight: 700;
    margin-bottom: 14px;
    display: block;
    text-transform: uppercase;
  }

  .news-card h3 {
    font-size: 22px;
    color: #0b5d3b;
    margin-bottom: 15px;
    line-height: 1.4;
    font-weight: 700;
  }

  .news-card p {
    font-size: 15px;
    color: #4b5563;
    line-height: 1.7;
    margin-bottom: 25px;
    flex-grow: 1; /* Pushes button to bottom if text is short */
  }

  /* READ MORE ACTION */
  .read-more {
    font-size: 15px;
    font-weight: 700;
    color: #22c1dc;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
  }

  .read-more span {
    transition: transform 0.3s ease;
    display: inline-block;
  }

  /* Animation triggered when the parent card is hovered */
  .news-card:hover .read-more {
    color: #0b5d3b;
  }

  .news-card:hover .read-more span {
    transform: translateX(8px);
  }

  /* RESPONSIVE DESIGN */
  @media (max-width: 1024px) {
    .news-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 70px 20px;

    .news-grid {
      grid-template-columns: 1fr;
    }

    .section-header {
      margin-bottom: 40px;
    }

    .section-header h2 {
      font-size: 30px;
    }

    .news-card {
      padding: 30px;
    }
    
    /* Reduced hover lift for touch devices */
    .news-card:hover {
      transform: translateY(-5px);
    }
  }
`;