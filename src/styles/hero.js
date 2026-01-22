import styled, { keyframes } from "styled-components";

const kenBurns = keyframes`
  0% { transform: scale(1) translate(0, 0); }
  100% { transform: scale(1.15) translate(-2%, -2%); }
`;

const revealText = keyframes`
  from { opacity: 0; transform: translateY(30px) skewY(2deg); filter: blur(8px); }
  to { opacity: 1; transform: translateY(0) skewY(0); filter: blur(0); }
`;

export const HeroWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #0b5d3b; /* Brand Green */

  .slick-slide > div {
    display: block;
  }

  /* === NAVIGATION ARROWS (HIDDEN ON MOBILE) === */
  .slick-prev,
  .slick-next {
    width: 55px;
    height: 55px;
    background: rgba(255, 255, 255, 0.1) !important;
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    z-index: 10;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    display: flex !important;
    align-items: center;
    justify-content: center;

    @media (max-width: 991px) {
      display: none !important; /* Hide arrows on tablets/phones for cleaner UI */
    }

    // &:hover {
    //   background: #22c1dc !important; /* Brand Teal */
    //   transform: scale(1.1);
    // }
  }

  .slick-prev { left: 30px; }
  .slick-next { right: 30px; }

  /* === CONTAINER & DYNAMIC HEIGHTS === */
  .slide-container {
    height: 80vh; 
    min-height: 600px;
    display: flex !important;
    align-items: center;
    padding: 0 10%;
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    @media (max-width: 768px) {
      height: 85vh; /* Taller on mobile to accommodate stacked text */
      padding: 0 5%;
      justify-content: center;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: inherit;
      background-size: cover;
      background-position: center;
      animation: ${kenBurns} 20s ease-out infinite alternate;
      z-index: 0;
    }
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(6, 74, 48, 0.9) 0%,
      rgba(6, 74, 48, 0.6) 50%,
      rgba(6, 74, 48, 0.3) 100%
    );
    z-index: 1;

    @media (max-width: 768px) {
      background: linear-gradient(
        to bottom,
        rgba(6, 74, 48, 0.8) 0%,
        rgba(6, 74, 48, 0.6) 100%
      ); /* Darker overlay for mobile readability */
    }
  }

  /* === CONTENT RESPONSIVITY === */
  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    color: white;

    @media (max-width: 768px) {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: clamp(32px, 6vw, 64px); /* Fluid typography: Min 32px, Max 64px */
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 20px;
      letter-spacing: -1.5px;
      animation: ${revealText} 1s cubic-bezier(0.2, 0.8, 0.2, 1) both;

      @media (max-width: 480px) {
        letter-spacing: -0.5px;
        line-height: 1.2;
      }
    }

    p {
      font-size: clamp(16px, 2vw, 20px);
      line-height: 1.6;
      margin-bottom: 40px;
      color: rgba(255, 255, 255, 0.9);
      max-width: 550px;
      animation: ${revealText} 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s both;

      @media (max-width: 768px) {
        margin-bottom: 30px;
      }
    }
  }

  .btn-primary {
    display: inline-flex;
    padding: 18px 40px;
    background: linear-gradient(135deg, #22c1dc, #1aa6c8); /* */
    color: white !important;
    font-size: 16px;
    font-weight: 800;
    border-radius: 100px;
    text-transform: uppercase;
    box-shadow: 0 12px 30px rgba(34, 193, 220, 0.3);
    transition: all 0.4s ease;
    animation: ${revealText} 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s both;

    @media (max-width: 480px) {
      padding: 15px 32px;
      font-size: 14px;
      width: 80%; /* Almost full width for thumb-friendly clicking */
      justify-content: center;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(34, 193, 220, 0.5);
    }
  }

  /* === MOBILE-FRIENDLY DOTS === */
  .slick-dots {
    bottom: 40px;
    
    @media (max-width: 480px) {
      bottom: 25px; /* Move dots up to avoid overlapping browser navigation bars */
    }

    li {
      margin: 0 4px;
      button:before { display: none; }

      button {
        width: 10px;
        height: 10px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transition: all 0.4s ease;
      }

      &.slick-active button {
        background: #22c1dc;
        width: 30px;
        border-radius: 5px;
      }
    }
  }
`;