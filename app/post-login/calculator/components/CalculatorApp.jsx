"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

export default function Calculator({
  bgColor = "#f3f4f6",
  accentColor = "#6366f1",
  operatorColor = "#22c55e",
}) {
  const [input, setInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Responsive Title Check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleBackspace = () => setInput((prev) => prev.slice(0, -1));
  const handleClear = () => setInput("");
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <Wrapper $bgColor={bgColor}>
      {/* Desktop Title */}
      <TitleDesktop>Calculator in Desktop</TitleDesktop>

      {/* Mobile Title */}
      <TitleMobile>Calculator in Mobile View</TitleMobile>

      <Container>
        <Display value={input} />
        <ButtonGrid
          onButtonClick={handleClick}
          onCalculate={handleCalculate}
          onClear={handleClear}
          onBackspace={handleBackspace}
          accentColor={accentColor}
          operatorColor={operatorColor}
        />
      </Container>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  background: ${(props) => props.$bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TitleDesktop = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
  border: 2px solid gray;
  padding: 0.5rem 0.5rem;
  border-radius: 15px;
  background-color: #e0e0e0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TitleMobile = styled.h1`
  display: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
  border: 2px solid red;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Container = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 20px;
  width: 320px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
`;
