import styled from "@emotion/styled";

interface TextProps {
  color?: string;
}
// sacado de un proyecto aparte, hice unas modificaciones por eso puede no tener sentido algunos font-size
const BaseTitle = styled.h1`
  font-family: Montserrat;
  color: ${(props) => (props.color ? `${props.color}` : "black")};

  font-weight: 800;
  margin: 0px;
`;

const BaseSubtitle = styled.h3`
  font-family: Montserrat;
  font-weight: 600;
  color: ${(props) => (props.color ? `${props.color}` : "black")};

  margin: 0px;
`;
const BaseText = styled.p`
  font-family: Montserrat;
  text-align: justify;
  font-weight: 400;
  color: ${(props) => (props.color ? `${props.color}` : "black")};

  margin: 0px;
`;

export const PrimaryTitle = styled(BaseTitle)`
  font-size: 31px;
  line-height: 38px;
`;
export const SecondaryTitle = styled(BaseTitle)`
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
`;

export const TertiaryTitle = styled(BaseTitle)`
  font-style: normal;

  font-size: 17px;
  line-height: 21px;
`;

export const PrimarySubtitle = styled(BaseSubtitle)`
  font-size: 17px;
  line-height: 21px;
`;
export const SecondarySubtitle = styled(BaseSubtitle)`
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
`;

export const PrimaryText = styled(BaseText)`
  font-style: normal;
  font-size: 20px;
  line-height: 22px;
`
export const PrimaryTextSemibold = styled(BaseText)`
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 17px;
`;
export const SecondaryText = styled(BaseText)`
  font-style: normal;
  font-size: 15px;
  line-height: 18px;
`;

export const CardText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  margin: 0px;
  color: ${(props) => (props.color ? `${props.color}` : "black")};
`;
export const TinyCardTitle = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  margin: 0px;

  color: ${(props) => (props.color ? `${props.color}` : "black")};
`;
