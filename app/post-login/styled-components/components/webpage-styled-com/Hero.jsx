"use client";
import styled from "styled-components";
import { ContentWrapper, ButtonGroup, Button } from "./SharedStyles";

const HeroSection = styled.section`
  text-align: center;
  padding: 100px 0 60px;
  
  @media (max-width: 768px) {
    padding: 60px 0 40px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  margin-bottom: 20px;
  background: linear-gradient(135deg, white 0%, #FF6B35 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: #ccc;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export default function Hero() {
  return (
    <HeroSection>
      <ContentWrapper>
        <HeroTitle>Master Styled Components</HeroTitle>
        <HeroSubtitle>
          Learn CSS-in-JS from basics to advanced. Build beautiful, maintainable React applications with confidence.
        </HeroSubtitle>
        <ButtonGroup>
          <Button $primary $large>Get Started</Button>
          <Button $large>View Docs</Button>
        </ButtonGroup>
      </ContentWrapper>
    </HeroSection>
  );
}

