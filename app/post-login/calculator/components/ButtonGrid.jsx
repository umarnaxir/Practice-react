import styled from "styled-components";
import Button from "./Button";

export default function ButtonGrid({
  onButtonClick,
  onCalculate,
  onClear,
  onBackspace,
  accentColor,
  operatorColor,
}) {
  // Number and operator buttons in a logical calculator order
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
  ];

  return (
    <Grid>
      {buttons.map((btn, index) => {
        // Operators
        if (["/", "*", "-", "+", "="].includes(btn)) {
          return (
            <Button
              key={index}
              label={btn}
              color={btn === "=" ? accentColor : operatorColor}
              textColor="#fff"
              onClick={
                btn === "=" ? onCalculate : () => onButtonClick(btn)
              }
            />
          );
        }

        // Numbers
        return (
          <Button
            key={index}
            label={btn}
            color="#d1d5db"
            textColor="#000"
            onClick={() => onButtonClick(btn)}
          />
        );
      })}

      {/* Last row: Clear + Backspace */}
      <ClearButton
        label="C"
        color="#f87171"
        textColor="#fff"
        onClick={onClear}
      />
      <ClearButton
        label="⌫"
        color="#facc15"
        textColor="#000"
        onClick={onBackspace}
      />
    </Grid>
  );
}

// 🧱 Styled Components
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
`;

// Button that takes up 2 columns (for C and ⌫)
const ClearButton = styled(Button)`
  grid-column: span 2;
`;
