"use client";
import { useState } from "react";
import styled from "styled-components";
import { Section, ContentWrapper, SectionTitle, SectionSubtitle, Card, FlexRow, Text } from "./SharedStyles";

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

export default function InteractiveSection() {
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

