"use client";
import styled from "styled-components";
import { Star, Globe, Code, Rocket } from "lucide-react";
import { Section, ContentWrapper, SectionTitle, SectionSubtitle } from "./SharedStyles";

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const StatCard = styled.div`
  background: #1a1a1a;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #FF6B35;
    transform: translateY(-5px);
    
    h3 {
      color: #FF6B35;
    }
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const StatNumber = styled.h3`
  font-size: 48px;
  font-weight: 700;
  color: white;
  margin: 15px 0;
  transition: color 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const StatLabel = styled.p`
  font-size: 16px;
  color: #999;
  
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default function StatsSection() {
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>By The Numbers</SectionTitle>
        <SectionSubtitle>Hover over each stat to see it highlight</SectionSubtitle>
        <StatsContainer>
          <StatCard>
            <Star size={36} color="#FF6B35" />
            <StatNumber>50K+</StatNumber>
            <StatLabel>GitHub Stars</StatLabel>
          </StatCard>
          
          <StatCard>
            <Globe size={36} color="#FF6B35" />
            <StatNumber>2M+</StatNumber>
            <StatLabel>Weekly Downloads</StatLabel>
          </StatCard>
          
          <StatCard>
            <Code size={36} color="#FF6B35" />
            <StatNumber>100K+</StatNumber>
            <StatLabel>Projects Built</StatLabel>
          </StatCard>
          
          <StatCard>
            <Rocket size={36} color="#FF6B35" />
            <StatNumber>500+</StatNumber>
            <StatLabel>Contributors</StatLabel>
          </StatCard>
        </StatsContainer>
      </ContentWrapper>
    </Section>
  );
}

