import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  overflow: hidden;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
    align-items: center;

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Image Styles */
  .about-image {
    position: relative;

    img {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 30px;
      box-shadow: 0 30px 60px -12px rgba(15, 23, 42, 0.15);
    }

    .experience-badge {
      position: absolute;
      bottom: -30px;
      right: 10px;
      background: #0d9488;
      color: white;
      padding: 30px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(13, 148, 136, 0.3);

      @media (min-width: 640px) {
        right: -30px;
      }

      h3 {
        font-size: 2.5rem;
        margin: 0;
        line-height: 1;
      }

      span {
        font-size: 0.9rem;
        font-weight: 500;
        display: block;
        margin-top: 5px;
      }
    }
  }

  /* Content Styles */
  .about-content {
    .tag {
      color: #0d9488;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 0.85rem;
      display: block;
      margin-bottom: 15px;
    }

    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      color: #0f172a;
      line-height: 1.2;
      margin-bottom: 25px;

      span {
        color: #64748b;
        font-weight: 400;
      }
    }

    p {
      color: #475569;
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 20px;
    }

    .about-list {
      list-style: none;
      padding: 0;
      margin: 30px 0;

      li {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 15px;
        color: #1e293b;
        font-weight: 500;

        .check {
          color: #0d9488;
          font-weight: 900;
        }
      }
    }

    .about-btn {
      display: inline-block;
      padding: 18px 40px;
      background: #0f172a;
      color: white;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        background: #0d9488;
        transform: translateY(-3px);
        box-shadow: 0 15px 30px rgba(13, 148, 136, 0.2);
      }
    }
  }
  @media (max-wdith: 768px) {
    .about-content {
      font-size: 30px;
    }
  }

  /* Mobile Responsive */
  @media (max-width: 1023px) {
    .about-image {
      margin-bottom: 40px;
      img {
        height: 400px;
      }
    }
    .about-content {
      text-align: center;
      .about-list li {
        justify-content: center;
      }
    }
  }
`;
