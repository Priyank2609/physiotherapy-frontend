import styled from "styled-components";

export const Wrapper = styled.div`
  .reviews-loading,
  .reviews-error {
    max-width: 600px;
    margin: 3rem auto;
    padding: 2.5rem;
    text-align: center;
    border-radius: 16px;
    /* Using a shadow to match your "Working Hours" card style */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    font-family: inherit;
  }

  /* Loading State: Matches your clean white/grey background */
  .reviews-loading {
    background-color: #ffffff;
    border: 1px solid #eef2f1;
    color: #01543d; /* Your Primary Dark Green */
  }

  .reviews-loading p {
    font-weight: 600;
    letter-spacing: -0.01em;
    animation: fadePulse 1.8s infinite ease-in-out;
  }

  /* Error State: Swapped harsh red for a "Muted Sage" that fits the green theme */
  .reviews-error {
    background-color: #f0f7f5; /* Very light mint */
    border: 1px solid #cce2db;
    color: #01543d;
  }

  .reviews-error p {
    margin-bottom: 1.2rem;
    font-weight: 500;
    color: #4b5563; /* Subtle grey for the text */
  }

  /* "Try Again" Button: Matches your header/button green */
  .reviews-error button {
    background-color: #01543d; /* Your exact brand green */
    color: #ffffff;
    border: none;
    padding: 12px 28px;
    border-radius: 50px; /* Rounded pill style to match your "Logout" button */
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(1, 84, 61, 0.2);
  }

  .reviews-error button:hover {
    background-color: #013d2c;
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(1, 84, 61, 0.3);
  }

  .reviews-error button:active {
    transform: translateY(0);
  }

  @keyframes fadePulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
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
