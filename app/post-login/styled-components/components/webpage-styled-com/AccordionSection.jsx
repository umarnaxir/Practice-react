"use client";
import { useState } from "react";
import styled from "styled-components";
import { ChevronDown } from "lucide-react";
import { Section, ContentWrapper, SectionTitle, SectionSubtitle } from "./SharedStyles";

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

export default function AccordionSection() {
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

