import styled from "styled-components";

export const ServiceDetailWrapper = styled.div`
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #ffffff;
  color: #333;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Header Section matching your 'Neck Pain' screenshot */
  .header-bg {
    background-color: #f4f9f8; /* Very light mint/white tint */
    padding: 60px 0;
    border-bottom: 1px solid #e2e8f0;

    h1 {
      font-size: 2.8rem;
      color: #064e3b; /* Deep Forest Green from your navbar */
      margin: 0;
      font-weight: 700;
    }

    .subtitle {
      color: #64748b;
      font-size: 1.1rem;
      margin: 10px 0 25px 0;
      max-width: 800px;
    }

    .breadcrumbs {
      font-size: 0.85rem;
      color: #94a3b8;

      .sep {
        margin: 0 10px;
      }
      .active {
        color: #064e3b; /* Matches main heading */
        font-weight: 600;
      }
    }
  }

  /* Layout Grid */
  .content-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    padding: 80px 20px;
    align-items: start;

    @media (max-width: 968px) {
      grid-template-columns: 1fr;
    }
  }

  /* Image Column */
  .images {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .main-img,
    .secondary-img {
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

      img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.5s ease;
      }

      &:hover img {
        transform: scale(1.03);
      }
    }
  }

  /* Text Column */
  .details {
    h2,
    h3 {
      color: #064e3b;
      margin-bottom: 20px;
      font-weight: 700;
    }

    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.4rem;
      margin-top: 40px;
    }

    p {
      line-height: 1.8;
      color: #475569;
      font-size: 1.05rem;
    }

    ul {
      padding-left: 20px;
      list-style: none;

      li {
        position: relative;
        margin-bottom: 12px;
        color: #475569;
        padding-left: 25px;

        &::before {
          content: "•";
          color: #0ea5e9; /* Medical Blue dot */
          font-weight: bold;
          position: absolute;
          left: 0;
          font-size: 1.2rem;
        }
      }
    }

    /* Info & Booking Box */
    .info-box {
      margin-top: 50px;
      padding: 30px;
      background: #f8fafc;
      border-radius: 15px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 30px;
      border: 1px solid #e2e8f0;

      div {
        font-size: 1.1rem;
        color: #1e293b;
        strong {
          color: #064e3b;
        }
      }

      .book-btn {
        margin-left: auto;
        background-color: #0ea5e9; /* Teal button from your screenshot */
        color: white;
        padding: 14px 32px;
        border-radius: 8px;
        border: none;
        font-weight: 700;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);

        &:hover {
          background-color: #0284c7;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(14, 165, 233, 0.4);
        }

        @media (max-width: 600px) {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }

  .status-text {
    text-align: center;
    padding: 100px;
    font-size: 1.2rem;
    color: #64748b;

    &.error {
      color: #ef4444;
    }
  }
`;
