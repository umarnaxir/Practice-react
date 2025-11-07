import styled from "styled-components";

export default function Button({ label, onClick, color, textColor }) {
  return (
    <StyledButton
      $color={color}
      $textColor={textColor}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: ${(props) => props.$color || "#d1d5db"};
  color: ${(props) => props.$textColor || "#000"};
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${(props) => darken(props.$color || "#d1d5db", 10)};
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Helper to darken button color on hover
function darken(hex, percent) {
  const f = parseInt(hex.slice(1), 16);
  const t = 0;
  const R = f >> 16;
  const G = (f >> 8) & 0x00ff;
  const B = f & 0x0000ff;
  const newColor =
    "#" +
    (
      0x1000000 +
      (Math.round((R - t) * (1 - percent / 100)) << 16) +
      (Math.round((G - t) * (1 - percent / 100)) << 8) +
      Math.round((B - t) * (1 - percent / 100))
    )
      .toString(16)
      .slice(1);
  return newColor;
}
