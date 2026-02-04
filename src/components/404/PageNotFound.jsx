import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <PageWrapper>
      <ContentBox>
        <ErrorCode>404</ErrorCode>
        <Title>Oops! A Wrong Turn.</Title>
        <Description>
          Even in recovery, we sometimes take a step in the wrong direction. The
          page you are looking for doesn't exist or has moved.
        </Description>
        <ButtonGroup>
          <PrimaryButton as={Link} to="/">
            Back to Home
          </PrimaryButton>
          <SecondaryButton as={Link} to="/services">
            Our Services
          </SecondaryButton>
        </ButtonGroup>
      </ContentBox>
    </PageWrapper>
  );
};

export default NotFound;

const PageWrapper = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #ffffff;
`;

const ContentBox = styled.div`
  text-align: center;
  max-width: 600px;
`;

const ErrorCode = styled.h2`
  font-size: clamp(8rem, 15vw, 12rem);
  font-weight: 900;
  margin: 0;
  line-height: 1;
  color: #d1fae5; /* Your brand's light green */
  user-select: none;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #064e3b; /* Dark Green */
  margin-top: -1rem;
  margin-bottom: 1rem;
  font-weight: 800;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled.button`
  background-color: #059669; /* Main Green */
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #064e3b;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(5, 150, 105, 0.2);
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  color: #059669;
  border: 2px solid #059669;

  &:hover {
    background-color: #f0fdf4;
    color: #064e3b;
    border-color: #064e3b;
  }
`;
