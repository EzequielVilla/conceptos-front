import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BaseButton = styled(Button)`
  color: white;
  border-radius: 8px;
  padding: 5px 16px;
  font-weight: bold;
  font-size: 16px;
  text-transform: none;
  border: 2px solid black;
  width: 200px;
  @media (min-width: 375px) {
    width: 350px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: #385fd5;
  :hover {
    background-color: #385ff9;
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background-color: #c85433;
  :hover {
    background-color: #c83d16;
  }
`;
export const TertiaryButton = styled(BaseButton)`
  color: black;
  background-color: #2fcf27;
  :hover {
    background-color: #10d905;
  }
`;
