"use client";
import { Container, Footer } from "./SharedStyles";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import AccordionSection from "./AccordionSection";
import PricingSection from "./PricingSection";
import StatsSection from "./StatsSection";
import InteractiveSection from "./InteractiveSection";

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
