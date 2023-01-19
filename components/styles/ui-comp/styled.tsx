import styled from "@emotion/styled";
import { BaseBox } from "../ui/box";
import { PrimaryText } from "../ui/text";

export const Root = styled.div`
  padding: 10px;
  background-color: #d6bbbb5c;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const SVGIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FontsContainer = styled.div``;
export const PreviusContainer = styled.div``;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AllExplicationContainer = styled.div`
  width: 700px;
`;
export const ExamplesContainer = styled.div`
  width: 1250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ComparationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ComponentsExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const OtherExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ExampleBox = styled(BaseBox)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow: hidden;
`;
export const WidthExampleBox = styled(ExampleBox)`
  width: 800px;
  height: 400px;
`;

export const ImagenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: 1 / 1 / 2 / 3;
  background-color: #a3f08b;
`;

export const TextOneBox = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  background-color: #f0d58b; ;
`;

export const TextTwoBox = styled.div`
  display: flex;
  align-items: center;
  grid-area: 2 / 2 / 3 / 3;
  background-color: #f4b7c3;
`;
