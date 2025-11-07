import styled from "styled-components";
// Container
export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background: #000000;
  min-height: 100vh;
  color: white;
`;

// Wrapper for consistent width across all sections
export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

// Button with props
export const Button = styled.button`
  padding: ${props => props.$large ? "18px 40px" : "12px 28px"};
  background: ${props => props.$primary ? "#FF6B35" : "transparent"};
  color: ${props => props.$primary ? "white" : "#FF6B35"};
  border: 2px solid #FF6B35;
  border-radius: 8px;
  font-size: ${props => props.$large ? "18px" : "16px"};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$primary ? "#E55A2B" : "#FF6B35"};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 107, 53, 0.4);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: ${props => props.$large ? "14px 30px" : "10px 20px"};
    font-size: ${props => props.$large ? "16px" : "14px"};
  }
`;

// Card base component
export const Card = styled.div`
  background: #1a1a1a;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid #333;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    border-color: #FF6B35;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Extended Card with highlight
export const HighlightCard = styled(Card)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 2px solid #FF6B35;
`;

// Section Styles
export const Section = styled.section`
  padding: 60px 0;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 15px;
  color: #FF6B35;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #999;
  text-align: center;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

// Grid Layout
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

// Flex Row
export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.$gap || "15px"};
  justify-content: ${props => props.$justify || "flex-start"};
  flex-wrap: wrap;
`;

// Text Component with variants
export const Text = styled.p`
  font-size: ${props => {
    switch(props.$size) {
      case "small": return "14px";
      case "large": return "20px";
      default: return "16px";
    }
  }};
  color: ${props => props.$muted ? "#999" : "white"};
  line-height: 1.6;
  margin-bottom: ${props => props.$noMargin ? "0" : "15px"};
  font-weight: ${props => props.$bold ? "600" : "400"};
  
  @media (max-width: 768px) {
    font-size: ${props => {
      switch(props.$size) {
        case "small": return "13px";
        case "large": return "18px";
        default: return "15px";
      }
    }};
  }
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// Icon Wrapper
export const IconWrapper = styled.div`
  width: ${props => props.$size || "60px"};
  height: ${props => props.$size || "60px"};
  background: ${props => props.$highlight ? "#FF6B35" : "#2a2a2a"};
  border-radius: ${props => props.$rounded ? "50%" : "12px"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    color: white;
  }
  
  ${Card}:hover & {
    background: #FF6B35;
    transform: scale(1.1);
  }
`;

// Button Group
export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    
    button {
      width: 100%;
      max-width: 300px;
    }
  }
`;

// Footer
export const Footer = styled.footer`
  text-align: center;
  padding: 40px 20px;
  color: #999;
  border-top: 1px solid #333;
  margin-top: 80px;
  
  a {
    color: #FF6B35;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    margin-top: 60px;
    font-size: 14px;
  }
`;

