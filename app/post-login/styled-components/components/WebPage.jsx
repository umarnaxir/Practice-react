"use client";
import { useState } from "react";
import styled from "styled-components";
import { Rocket, Smartphone, Code, Zap, Globe, Shield, ChevronDown, Check, X, Star } from "lucide-react";

// ==========================================
// STYLED COMPONENTS (CSS) - LEARN HERE!
// ==========================================

// 🎨 LESSON 1: Basic Styled Component
const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background: #000000;
  min-height: 100vh;
  color: white;
`;

// Wrapper for consistent width across all sections
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

// 🎨 LESSON 2: Using Props for Dynamic Styling (with transient props)
const Button = styled.button`
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

// 🎨 LESSON 3: Extending Styled Components
const Card = styled.div`
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

const HighlightCard = styled(Card)`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  border: 2px solid #FF6B35;
`;

// Hero Section
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

// 🎨 LESSON 4: Grid and Flexbox with Styled Components
const Grid = styled.div`
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

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.$gap || "15px"};
  justify-content: ${props => props.$justify || "flex-start"};
  flex-wrap: wrap;
`;

// Section Styles
const Section = styled.section`
  padding: 60px 0;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const SectionTitle = styled.h2`
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

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #999;
  text-align: center;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

// 🎨 LESSON 5: Accordion Styles
const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionItem = styled.div`
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #FF6B35;
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  padding: 20px 25px;
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  transition: all 0.3s ease;
  
  &:hover {
    color: #FF6B35;
  }
  
  svg {
    flex-shrink: 0;
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? "rotate(180deg)" : "rotate(0deg)"};
  }
  
  @media (max-width: 768px) {
    padding: 16px 20px;
    font-size: 16px;
  }
`;

const AccordionContent = styled.div`
  max-height: ${props => props.$isOpen ? "500px" : "0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${props => props.$isOpen ? "0 25px 20px" : "0 25px"};
  color: #ccc;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    padding: ${props => props.$isOpen ? "0 20px 16px" : "0 20px"};
    font-size: 14px;
  }
`;

// 🎨 LESSON 6: Icon Wrapper with Props
const IconWrapper = styled.div`
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

// 🎨 LESSON 7: Text Styles with Different Variants
const Text = styled.p`
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

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
  color: white;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

// 🎨 LESSON 8: Pricing Table Styles
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

// 🎨 LESSON 9: Interactive Stats
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

// 🎨 LESSON 10: Toggle Switch
const ToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  cursor: pointer;
  flex-shrink: 0;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  
  &:checked + span {
    background: #FF6B35;
  }
  
  &:checked + span:before {
    transform: translateX(30px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #333;
  border-radius: 30px;
  transition: 0.3s;
  
  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background: white;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

const Footer = styled.footer`
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

const ButtonGroup = styled.div`
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


// ==========================================
// REACT COMPONENTS (JSX) - LEARN HERE!
// ==========================================

// 🔥 COMPONENT 1: Hero with Buttons
function Hero() {
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

// 🔥 COMPONENT 2: Feature Cards with Props
function FeaturesSection() {
  const features = [
    {
      icon: <Rocket size={28} />,
      title: "Props Magic",
      description: "Pass props to styled components and create dynamic styles based on component state.",
      highlight: true
    },
    {
      icon: <Code size={28} />,
      title: "Scoped Styles",
      description: "No more CSS conflicts! Every component has its own isolated styles that won't leak.",
      highlight: false
    },
    {
      icon: <Zap size={28} />,
      title: "Theming",
      description: "Create consistent design systems with ThemeProvider. Switch themes instantly.",
      highlight: false
    },
    {
      icon: <Globe size={28} />,
      title: "Server Rendering",
      description: "Full SSR support for Next.js and other frameworks. Critical CSS extraction built-in.",
      highlight: true
    },
    {
      icon: <Shield size={28} />,
      title: "TypeScript Ready",
      description: "Complete TypeScript support with autocompletion and type checking for props.",
      highlight: false
    },
    {
      icon: <Smartphone size={28} />,
      title: "Mobile First",
      description: "Build responsive designs with media queries right inside your styled components.",
      highlight: false
    }
  ];

  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Core Features</SectionTitle>
        <SectionSubtitle>Everything you need to build modern web applications</SectionSubtitle>
        <Grid>
          {features.map((feature, index) => {
            const CardComponent = feature.highlight ? HighlightCard : Card;
            return (
              <CardComponent key={index}>
                <IconWrapper $highlight={feature.highlight} $rounded>
                  {feature.icon}
                </IconWrapper>
                <CardTitle>{feature.title}</CardTitle>
                <Text $muted>{feature.description}</Text>
                <Button $primary={feature.highlight}>Learn More</Button>
              </CardComponent>
            );
          })}
        </Grid>
      </ContentWrapper>
    </Section>
  );
}

// 🔥 COMPONENT 3: Accordion (Interactive)
function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: "What are Styled Components?",
      answer: "Styled Components is a CSS-in-JS library that lets you write actual CSS code to style your components. It removes the mapping between components and styles, making it easier to maintain your codebase."
    },
    {
      question: "How do I use props in Styled Components?",
      answer: "You can pass props to styled components just like regular React components. Access them inside your CSS using ${props => props.yourProp}. This allows you to create dynamic styles based on component state or props."
    },
    {
      question: "Can I extend existing styled components?",
      answer: "Yes! Use styled(YourComponent) to extend an existing styled component. This creates a new component that inherits all styles from the original and lets you add or override styles."
    },
    {
      question: "How do I handle hover states?",
      answer: "Use the &:hover pseudo-selector inside your styled component. You can also reference parent hover states using ${ParentComponent}:hover & to style child elements when parent is hovered."
    },
    {
      question: "What about media queries?",
      answer: "Media queries work just like regular CSS! Write them directly inside your styled component using @media (min-width: 768px) { /* styles */ }. You can also create helper functions for consistent breakpoints."
    }
  ];
  
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionSubtitle>Click on any question to see the answer</SectionSubtitle>
        <AccordionContainer>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionHeader 
                onClick={() => toggleAccordion(index)}
                $isOpen={openIndex === index}
              >
                {faq.question}
                <ChevronDown size={24} />
              </AccordionHeader>
              <AccordionContent $isOpen={openIndex === index}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContainer>
      </ContentWrapper>
    </Section>
  );
}

// 🔥 COMPONENT 4: Pricing Cards
function PricingSection() {
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

// 🔥 COMPONENT 5: Stats with Hover Effect
function StatsSection() {
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

// 🔥 COMPONENT 6: Interactive Toggle Demo
function InteractiveSection() {
  const [darkMode, setDarkMode] = useState(true);
  const [animations, setAnimations] = useState(true);
  
  return (
    <Section>
      <ContentWrapper>
        <SectionTitle>Interactive Demo</SectionTitle>
        <SectionSubtitle>Toggle switches to see styled components in action</SectionSubtitle>
        <Card style={{ margin: "0 auto" }}>
          <FlexRow $justify="space-between" style={{ marginBottom: "25px" }}>
            <div>
              <Text $bold $noMargin>Dark Mode</Text>
              <Text $size="small" $muted $noMargin>Currently {darkMode ? "ON" : "OFF"}</Text>
            </div>
            <ToggleWrapper>
              <ToggleInput 
                type="checkbox" 
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <ToggleSlider />
            </ToggleWrapper>
          </FlexRow>
          
          <FlexRow $justify="space-between">
            <div>
              <Text $bold $noMargin>Animations</Text>
              <Text $size="small" $muted $noMargin>Currently {animations ? "ON" : "OFF"}</Text>
            </div>
            <ToggleWrapper>
              <ToggleInput 
                type="checkbox" 
                checked={animations}
                onChange={() => setAnimations(!animations)}
              />
              <ToggleSlider />
            </ToggleWrapper>
          </FlexRow>
          
          <div style={{ marginTop: "30px", padding: "20px", background: "#2a2a2a", borderRadius: "8px" }}>
            <Text>
              This demonstrates how styled components can be controlled with React state. 
              The toggle switches use the :checked pseudo-selector and sibling selectors 
              to create smooth transitions.
            </Text>
          </div>
        </Card>
      </ContentWrapper>
    </Section>
  );
}

// 🔥 MAIN APP COMPONENT
export default function App() {
  return (
    <Container>
      <Hero />
      <FeaturesSection />
      <AccordionSection />
      <PricingSection />
      <StatsSection />
      <InteractiveSection />
      <Footer>
        © 2025 Styled Components Learning Guide | Built with React & Styled Components
        <br />
        <a href="https://styled-components.com/docs/basics#motivation" target="_blank" rel="noopener noreferrer">
          Learn More at Official Docs
        </a>
      </Footer>
    </Container>
  );
}