import styled from "@emotion/styled";

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  cursor: pointer;
  background-color: ${(props) => (props.color ? `${props.color})` : "#30B1D9")};
`;
