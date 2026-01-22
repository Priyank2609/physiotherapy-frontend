import styled from "styled-components";

export const AdvantagesSection = styled.section`
  padding: 100px 0;
  background-color: #0f172a; // Deep Navy/Slate for contrast
  color: white;
  position: relative;
  overflow: hidden;

  // Background decoration for premium feel
  &::before {
    content: "";
    position: absolute;
    top: -10%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(13, 148, 136, 0.15) 0%,
      transparent 70%
    );
    filter: blur(50px);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 1;
  }

  .header {
    text-align: center;
    margin-bottom: 60px;

    .subtitle {
      color: #2dd4bf; // Brighter teal for dark background
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.9rem;
    }

    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      margin-top: 15px;

      span {
        color: #2dd4bf;
      }
    }
  }

  .advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
  }

  .adv-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 40px 30px;
    border-radius: 24px;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.07);
      border-color: rgba(45, 212, 191, 0.5);

      .icon-box {
        transform: scale(1.1) rotate(5deg);
        background: #2dd4bf;
        color: #0f172a;
      }

      .card-footer {
        width: 40%;
      }
    }

    .icon-box {
      width: 60px;
      height: 60px;
      background: rgba(45, 212, 191, 0.1);
      color: #2dd4bf;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      border-radius: 16px;
      margin-bottom: 25px;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: 15px;
      font-weight: 600;
    }

    p {
      color: #94a3b8;
      line-height: 1.6;
      font-size: 1rem;
    }

    .card-footer {
      position: absolute;
      bottom: 0;
      left: 30px;
      height: 3px;
      width: 0;
      background: #2dd4bf;
      transition: width 0.4s ease;
      border-radius: 3px 3px 0 0;
    }
  }

  Mobile Responsive */ @media (max-width: 640px) {
    padding: 70px 0;

    .header h2 {
      font-size: 1.8rem;
    }

    .adv-card {
      padding: 30px 20px;
      text-align: center;

      .icon-box {
        margin: 0 auto 20px;
      }

      .card-footer {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`;
