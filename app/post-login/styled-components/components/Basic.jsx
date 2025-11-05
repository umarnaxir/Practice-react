"use client";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 200px;
  margin: 400px 100px;
  background: blue;
  padding: 10px 20px;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export default function App() {
  return <Button>Click Me</Button>;
}
