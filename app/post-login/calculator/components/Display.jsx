import styled from "styled-components";

export default function Display({ value }) {
  return <Screen>{value || "0"}</Screen>;
}

const Screen = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #e5e7eb;
  border-radius: 10px;
  text-align: right;
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  overflow-x: auto;
`;
