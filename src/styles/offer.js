import styled from "styled-components";

export const DisciplinesSection = styled.section`
  padding: 100px 0;
  background: radial-gradient(circle at top right, #fdfeff, #f1f5f9);
  overflow: hidden;

  .container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;

    @media (min-width: 1024px) {
      grid-template-columns: 400px 1fr;
      align-items: start;
    }
  }

  .section-intro {
    @media (min-width: 1024px) {
      position: sticky;
      top: 100px;
    }

    .badge {
      display: inline-block;
      padding: 6px 16px;
      background: rgba(13, 148, 136, 0.1);
      color: #0d9488;
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      color: #0f172a;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 1.5rem;

      span {
        color: #0d9488;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(13, 148, 136, 0.1);
          z-index: -1;
        }
      }
    }

    p {
      font-size: 1.2rem;
      color: #475569;
      margin-bottom: 2.5rem;
      line-height: 1.7;
    }

    .btn-all-services {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 18px 32px;
      background: #0f172a;
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background: #0d9488;
        transform: scale(1.05);
        box-shadow: 0 20px 25px -5px rgba(13, 148, 136, 0.3);
      }
    }
  }

  @media (max-width: 768px) {
    .section-intro h2 {
      font-size: 30px;
    }
  }

  .disciplines-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }

  .discipline-card {
    background: white;
    border-radius: 24px;
    border: 1px solid rgba(226, 232, 240, 0.8);
    padding: 12px; // Inner gutter for premium feel
    transition: all 0.4s ease;

    &:hover {
      border-color: #0d9488;
      background: #ffffff;
    }

    .card-image {
      position: relative;
      height: 240px;
      border-radius: 18px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s ease;
      }

      .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(15, 23, 42, 0.4), transparent);
      }
    }

    .card-content {
      padding: 24px 12px 12px;

      h3 {
        font-size: 1.4rem;
        color: #0f172a;
        margin-bottom: 12px;
      }

      p {
        color: #64748b;
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 24px;
      }

      .find-out-more {
        text-decoration: none;
        color: #0d9488;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        gap: 8px;

        .arrow {
          transition: transform 0.3s ease;
          color: #0d9488;
        }

        &:hover .arrow {
          transform: translateX(5px);
        }
      }
    }

    &:hover .card-image img {
      transform: scale(1.1);
    }
  }

  /* Mobile Specific Adjustments */
  @media (max-width: 640px) {
    padding: 60px 0;

    .disciplines-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .section-intro {
      text-align: center;
      p {
        margin-inline: auto;
      }
      .btn-all-services {
        margin: 0 auto;
      }
    }
  }
`;
