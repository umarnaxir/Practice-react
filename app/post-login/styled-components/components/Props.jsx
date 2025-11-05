"use client";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.primary ? "Red" : "Blue"};
  padding: 10px;
  color: white;
  margin: 2px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export default function App() {
  return (
    <>
      <Button primary>Primary Button</Button>
      <Button>Default Button</Button>
    </>
  );
}
