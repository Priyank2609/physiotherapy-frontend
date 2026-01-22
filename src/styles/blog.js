import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ListingWrapper = styled.div`
  background: #fcfdfd;
  min-height: 100vh;
  padding-bottom: 60px; /* Reduced for mobile */

  @media (min-width: 768px) {
    padding-bottom: 100px;
  }

  a {
    text-decoration: none !important;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const HeaderSection = styled.header`
  background: linear-gradient(rgba(6, 78, 59, 0.95), rgba(6, 78, 59, 0.98));
  padding: 60px 0 100px; /* Smaller padding for mobile */
  color: white;

  @media (min-width: 768px) {
    padding: 100px 0 140px;
  }

  .header-flex {
    display: flex;
    flex-direction: column; /* Stack by default */
    align-items: flex-start;
    gap: 30px;

    @media (min-width: 968px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  h1 {
    font-size: clamp(1.8rem, 8vw, 3.2rem);
    font-weight: 800;
    margin-bottom: 15px;
    line-height: 1.2;
    animation: ${fadeInUp} 0.6s ease-out;
  }

  .subtitle {
    color: #10b981;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 1.5px;
    font-size: 0.75rem;
    display: block;
    margin-bottom: 8px;
  }

  p {
    font-size: 1rem;
    color: #a7f3d0;
    line-height: 1.5;
    max-width: 600px;
  }
`;

export const CreateButton = styled(Link)`
  background: #10b981;
  color: white;
  padding: 12px 24px;
  border-radius: 100px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
  white-space: nowrap;

  @media (min-width: 768px) {
    padding: 16px 28px;
    font-size: 1rem;
  }
`;

export const BlogGrid = styled.div`
  display: grid;
  /* 1 column on mobile, 2 on tablet, 3 on desktop */
  grid-template-columns: 1fr;
  gap: 25px;
  margin-top: -40px;
  position: relative;
  z-index: 10;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: -60px;
  }
`;

export const BlogCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f4f8;

  .card-image {
    height: 200px; /* Fixed height for consistency */
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card-content {
    padding: 20px;

    @media (min-width: 768px) {
      padding: 30px;
    }

    .card-meta {
      display: flex;
      flex-wrap: wrap; /* Prevent overlap on very small screens */
      gap: 12px;
      color: #94a3b8;
      font-size: 0.8rem;
      margin-bottom: 12px;
      span {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 800;
      color: #064e3b;
      margin-bottom: 10px;
      line-height: 1.3;
    }

    p {
      color: #64748b;
      font-size: 0.9rem;
      margin-bottom: 20px;
      line-height: 1.6;
    }

    .read-more {
      color: #0ea5e9;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
    }
  }
`;

export const FeaturedBadge = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  padding: 4px 10px;
  border-radius: 50px;
  font-size: 0.65rem;
  font-weight: 800;
  color: #064e3b;
  z-index: 5;
`;

export const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  padding: 20px;
  text-align: center;
  color: #064e3b;
  font-weight: 700;
`;
