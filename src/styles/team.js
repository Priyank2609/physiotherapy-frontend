import styled from "styled-components";

/* ================= SECTION ================= */

export const TeamSection = styled.section`
  padding: 120px 0;
  background: #fdfdfd;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(34, 193, 220, 0.06) 0%,
      transparent 70%
    );
    z-index: 0;
  }

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 1;
  }

  .header-area {
    text-align: center;
    margin-bottom: 80px;

    .badge {
      background: #0b5d3b;
      color: #fff;
      padding: 8px 20px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      box-shadow: 0 10px 20px rgba(11, 93, 59, 0.2);
    }

    h2 {
      font-size: clamp(2.4rem, 5vw, 3.4rem);
      color: #0b5d3b;
      margin-top: 25px;
      font-weight: 900;
      letter-spacing: -1px;

      span {
        color: transparent;
        -webkit-text-stroke: 1px #0b5d3b;
        background: linear-gradient(120deg, #0b5d3b, #22c1dc);
        -webkit-background-clip: text;
        background-clip: text;
      }
    }

    p {
      color: #475569;
      font-size: 1.15rem;
      max-width: 650px;
      margin: 20px auto 0;
      line-height: 1.6;
    }
  }
`;

/* ================= GRID ================= */

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

/* ================= CARD ================= */

export const TeamCard = styled.div`
  background: #ffffff;
  border-radius: 32px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.45s ease,
    box-shadow 0.45s ease,
    border 0.45s ease;

  &:hover {
    transform: translateY(-14px);
    border-color: #22c1dc;
    box-shadow: 0 40px 80px -20px rgba(11, 93, 59, 0.18);

    .image-wrapper img {
      transform: scale(1.1);
    }

    .card-overlay {
      opacity: 1;
    }

    .social-links {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  /* ===== IMAGE WRAPPER (FIXED) ===== */

  .image-wrapper {
    position: relative;
    height: 360px; /* 🔥 GUARANTEED HEIGHT */
    margin: 12px;
    border-radius: 24px;
    overflow: hidden;
    background: #e5e7eb; /* fallback */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      object-position: top;
      transition: transform 0.8s ease;
      will-change: transform;
    }

    .card-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(11, 93, 59, 0.85),
        rgba(11, 93, 59, 0)
      );
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: 1;
    }

    .social-links {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -30%);
      display: flex;
      gap: 14px;
      opacity: 0;
      transition: all 0.45s ease;
      z-index: 2;

      .s-link {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: #ffffff;
        border: none;
        color: #0b5d3b;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.35s ease;

        &:hover {
          background: #22c1dc;
          color: #ffffff;
          transform: rotate(360deg) scale(1.05);
        }
      }
    }
  }

  /* ===== CONTENT ===== */

  .content-box {
    padding: 10px 32px 32px;
    text-align: center;

    .role-tag {
      display: inline-block;
      color: #22c1dc;
      font-weight: 800;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 1.55rem;
      color: #0b5d3b;
      margin-bottom: 10px;
    }

    p {
      color: #64748b;
      font-size: 1rem;
      line-height: 1.55;
      margin-bottom: 25px;
    }

    .profile-btn {
      background: transparent;
      border: 1px solid #e2e8f0;
      padding: 12px 26px;
      border-radius: 14px;
      font-weight: 600;
      color: #1e293b;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #0b5d3b;
        color: #ffffff;
        border-color: #0b5d3b;
      }
    }
  }

  /* ===== MOBILE IMAGE SAFETY ===== */

  @media (max-width: 640px) {
    .image-wrapper {
      height: 300px;
      margin: 10px;
    }

    .content-box {
      padding: 10px 22px 28px;
    }
  }
`;
