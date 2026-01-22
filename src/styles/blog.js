import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ListingWrapper = styled.div`
  background: #fcfdfd;
  min-height: 100vh;
  padding-bottom: 100px;

  a {
    text-decoration: none !important;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  .no-blogs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 100px 20px;
    background: #ffffff;
    border-radius: 24px;
    margin-top: -20px; /* Pulls it slightly closer to the header */

    .empty-icon-circle {
      background: #f0fdf4;
      color: #059669;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      box-shadow: 0 8px 20px rgba(5, 150, 105, 0.1);
    }

    h2 {
      color: #064e3b;
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 12px;
    }

    p {
      color: #64748b;
      max-width: 400px;
      line-height: 1.6;
      font-size: 1.1rem;
      margin-bottom: 30px;
    }

    .refresh-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      background: #064e3b;
      color: white;
      border: none;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #0d9488;
        transform: translateY(-2px);
      }
    }
  }
`;

export const HeaderSection = styled.header`
  background: linear-gradient(rgba(6, 78, 59, 0.95), rgba(6, 78, 59, 0.98));
  padding: 100px 0 140px;
  color: white;

  .header-flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;

    @media (max-width: 968px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    font-weight: 800;
    margin-bottom: 20px;
    line-height: 1.2;
    animation: ${fadeInUp} 0.6s ease-out;
  }

  .subtitle {
    color: #10b981;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    font-size: 0.85rem;
    display: block;
    margin-bottom: 12px;
  }

  p {
    font-size: 1.1rem;
    color: #a7f3d0;
    line-height: 1.6;
    margin: 0;
  }
`;

export const CreateButton = styled(Link)`
  background: #10b981;
  color: white;
  padding: 16px 28px;
  border-radius: 100px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  white-space: nowrap;
  border: 2px solid transparent;

  &:hover {
    background: #059669;
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(16, 185, 129, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    transition: transform 0.3s ease;
  }
  &:hover svg {
    transform: rotate(90deg);
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 40px;
  margin-top: -60px;
  position: relative;
  z-index: 10;
`;
export const BlogCard = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid #f0f4f8;
  position: relative;

  & > a {
    text-decoration: none !important;
    display: block;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px rgba(6, 78, 59, 0.15);
    border-color: #0ea5e9;
  }

  .card-image {
    height: 220px;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(6, 78, 59, 0.2), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);
    }
  }

  &:hover .card-image {
    &::after {
      opacity: 1;
    }
    img {
      transform: scale(1.15);
    }
  }

  .card-content {
    padding: 30px;

    .card-meta {
      display: flex;
      gap: 15px;
      color: #94a3b8;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 15px;

      span {
        display: flex;
        align-items: center;
        gap: 6px;
        transition: color 0.3s ease;
      }
    }

    h3 {
      font-size: 1.45rem;
      font-weight: 800;
      color: #064e3b;
      margin-bottom: 12px;
      line-height: 1.3;
      transition: color 0.3s ease;
    }

    p {
      color: #64748b;
      font-size: 0.95rem;
      margin-bottom: 25px;
      line-height: 1.6;
    }

    .read-more {
      color: #0ea5e9;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      svg {
        transition: transform 0.3s ease;
      }
    }
  }

  &:hover {
    .card-content {
      h3 {
        color: #0ea5e9;
      }

      .card-meta span {
        color: #064e3b;
      }
      .read-more svg {
        transform: translateX(5px);
      }
    }
  }
`;

export const FeaturedBadge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: white;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #064e3b;
  z-index: 5;
`;

export const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-weight: 700;
  color: #064e3b;
`;
