"use client";
import styled from "styled-components";
import { Check, X } from "lucide-react";
import { Section, ContentWrapper, SectionTitle, SectionSubtitle, Grid, Card, Button, Text } from "./SharedStyles";

const PricingCard = styled(Card)`
  text-align: center;
  position: relative;
  padding: 40px 30px;
  
  ${props => props.$featured && `
    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
    border: 2px solid #FF6B35;
  `}
  
  @media (min-width: 993px) {
    ${props => props.$featured && `
      transform: scale(1.05);
    `}
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const PriceBadge = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #FF6B35;
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const Price = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #FF6B35;
  margin: 20px 0;
  
  span {
    font-size: 20px;
    color: #999;
  }
  
  @media (max-width: 768px) {
    font-size: 36px;
    
    span {
      font-size: 16px;
    }
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  padding: 12px 0;
  color: ${props => props.$disabled ? "#555" : "#ccc"};
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    flex-shrink: 0;
    color: ${props => props.$disabled ? "#555" : "#FF6B35"};
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 0;
  }
`;

export default function PricingSection() {
  const plans = [
    {
      name: "Beginner",
      price: "Free",
      features: [
        { text: "Basic Components", included: true },
        { text: "Props Usage", included: true },
        { text: "Hover Effects", included: true },
        { text: "Advanced Theming", included: false },
        { text: "TypeScript Support", included: false }
      ],
      featured: false
    },
    {
      name: "Intermediate",
      price: "$29",
      features: [
        { text: "Basic Components", included: true },
        { text: "Props Usage", included: true },
        { text: "Hover Effects", included: true },
        { text: "Advanced Theming", included: true },
        { text: "TypeScript Support", included: true }
      ],
      featured: true
    },
    {
      name: "Advanced",
      price: "$59",
      features: [
        { text: "Basic Components", included: true },
        { text: "Props Usage", included: true },
        { text: "Hover Effects", included: true },
        { text: "Advanced Theming", included: true },
        { text: "TypeScript Support", included: true }
      ],
      featured: false
    }
  ];
  
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Learning Paths</SectionTitle>
        <SectionSubtitle>Choose the right path for your skill level</SectionSubtitle>
        <Grid>
          {plans.map((plan, index) => (
            <PricingCard key={index} $featured={plan.featured}>
              {plan.featured && <PriceBadge>POPULAR</PriceBadge>}
              <Text $size="large" $bold>{plan.name}</Text>
              <Price>
                {plan.price}
                <span>/course</span>
              </Price>
              <FeatureList>
                {plan.features.map((feature, idx) => (
                  <FeatureItem key={idx} $disabled={!feature.included}>
                    {feature.included ? <Check size={20} /> : <X size={20} />}
                    {feature.text}
                  </FeatureItem>
                ))}
              </FeatureList>
              <Button $primary={plan.featured} style={{width: "100%"}}>
                {plan.featured ? "Start Learning" : "Choose Plan"}
              </Button>
            </PricingCard>
          ))}
        </Grid>
      </ContentWrapper>
    </Section>
  );
}

