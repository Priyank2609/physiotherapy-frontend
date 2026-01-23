import styled from "styled-components";

export const Wrapper = styled.div`
  /* Container for both states */
  .reviews-loading,
  .reviews-error {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    text-align: center;
    border-radius: 12px;
    font-family:
      "Inter",
      system-ui,
      -apple-system,
      sans-serif;
  }

  /* Loading State Styling */
  .reviews-loading {
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    color: #64748b;
  }

  .reviews-loading p {
    font-weight: 500;
    margin: 0;
    /* Simple pulse effect for the text */
    animation: fadePulse 1.5s infinite ease-in-out;
  }

  @keyframes fadePulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  /* Error State Styling */
  .reviews-error {
    background-color: #fef2f2;
    border: 1px solid #fecaca;
    color: #991b1b;
  }

  .reviews-error p {
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  /* "Try Again" Button Styling */
  .reviews-error button {
    background-color: #dc2626;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition:
      background-color 0.2s ease,
      transform 0.1s active;
  }

  .reviews-error button:hover {
    background-color: #b91c1c;
  }

  .reviews-error button:active {
    transform: scale(0.98);
  }
`;

export const TestimonialsSection = styled.section`
  padding: 100px 0;
  /* Matching your Deep Navy background from the image */
  background-color: #060e1a;
  background-image:
    radial-gradient(
      circle at 10% 20%,
      rgba(34, 193, 220, 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(11, 93, 59, 0.05) 0%,
      transparent 50%
    );
  overflow: hidden;

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header {
    text-align: center;
    margin-bottom: 70px;

    .badge {
      color: #22c1dc; /* Cyan from your theme */
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 11px;
      background: rgba(34, 193, 220, 0.1);
      padding: 8px 20px;
      border-radius: 50px;
      border: 1px solid rgba(34, 193, 220, 0.2);
      display: inline-block;
    }

    h2 {
      font-size: clamp(2.2rem, 5vw, 3.2rem);
      color: #ffffff; /* White text for dark background */
      margin-top: 20px;
      font-weight: 800;
      span {
        color: #22c1dc;
      }
    }
  }

  .testimonial-swiper {
    padding: 20px 10px 100px !important;
  }

  .testimonial-card {
    /* Subtle Dark Card Surface */
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 50px 40px;
    border-radius: 24px;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: all 0.4s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: #22c1dc;
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }

    /* Watermark Quote Icon */
    &::before {
      content: "“";
      position: absolute;
      top: 10px;
      left: 30px;
      font-size: 120px;
      color: #22c1dc;
      opacity: 0.1;
      font-family: serif;
    }

    .stars {
      display: flex;
      justify-content: center;
      gap: 5px;
      color: #ffb800;
      margin-bottom: 25px;
      font-size: 18px;
    }

    .testimonial-text {
      color: #cbd5e1; /* Light gray text for readability */
      font-size: 1.1rem;
      line-height: 1.8;
      font-style: italic;
      margin-bottom: 30px;
      flex-grow: 1;
      z-index: 1;
    }

    .user-info {
      padding-top: 25px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      width: 100%;

      h4 {
        color: #22c1dc; /* Name in Theme Color */
        margin: 0;
        font-weight: 700;
        font-size: 1.25rem;
      }

      span {
        color: #94a3b8;
        font-size: 0.9rem;
        font-weight: 500;
        margin-top: 5px;
        display: block;
      }
    }
  }

  /* Slider Pagination Styling */
  .swiper-pagination-bullet {
    background: #1e293b !important;
    opacity: 1;
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    background: #22c1dc !important; /* Cyan active pill */
    width: 35px !important;
    border-radius: 10px;
  }
`;
