import styled from "styled-components";

export const MapWrapper = styled.section`
  padding: 100px 0;
  background: #f8fafc; /* Clean background to make the map pop */

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .section-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 60px;

    .tag {
      background: rgba(11, 93, 59, 0.1);
      color: #0b5d3b;
      padding: 6px 16px;
      border-radius: 999px;
      font-weight: 700;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    h2 {
      font-size: clamp(30px, 5vw, 42px);
      color: #0b5d3b;
      margin: 15px 0;
      font-weight: 800;
    }

    p {
      color: #64748b;
      font-size: 17px;
    }
  }

  .map-container {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
    height: 500px;
    background: #e2e8f0;
  }

  .map-box {
    width: 100%;
    height: 100%;

    iframe {
      width: 100%;
      height: 100%;
      border: 0;
      filter: grayscale(0.2) contrast(1.1); /* Slightly muted for premium look */
    }
  }

  /* GLASS INFO OVERLAY */
  .info-overlay {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 350px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(15px);
    padding: 40px;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    z-index: 10;

    .info-item {
      display: flex;
      gap: 15px;
      margin-bottom: 25px;

      .icon {
        font-size: 24px;
        color: #22c1dc;
      }

      h4 {
        font-size: 16px;
        color: #0b5d3b;
        margin-bottom: 4px;
        font-weight: 700;
      }

      p {
        font-size: 14px;
        color: #4b5563;
        line-height: 1.5;
      }
      a {
        color: #4b5563;
      }
    }

    .get-directions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: #0b5d3b;
      color: white;
      text-decoration: none;
      padding: 14px;
      border-radius: 12px;
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        background: #22c1dc;
        transform: translateY(-2px);
      }
    }
  }

  /* MOBILE RESPONSIVE */
  @media (max-width: 1024px) {
    .info-overlay {
      position: relative;
      top: 0;
      right: 0;
      width: 100%;
      margin-top: -50px; /* Overlaps map slightly for style */
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    }

    .map-container {
      height: auto;
      display: flex;
      flex-direction: column;
    }

    .map-box {
      height: 350px;
    }
  }
`;
