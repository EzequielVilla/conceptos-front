import styled from "@emotion/styled";
import { DownloadIcon as DownloadSVGIcon } from "./svg/download-icon";
import { ShareIcon } from "./svg/share-icon";
import { ArrowRightIcon } from "./svg/arrow-right-icon";
import { FacebookIconSVG } from "./svg/facebook-icon";

type Color = "blue" | "white";
interface Props {
  color?: Color;
}
const Download = styled(DownloadSVGIcon)`
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.color ? `${props.color}` : "white")};
`;
const Arrow = styled(ArrowRightIcon)`
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.color ? `${props.color}` : "white")};
`;
const StyledPlus = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  color: ${(props) => (props.color ? `${props.color}` : "white")};
  margin: 0px;
  font-size: 31px;
  font-weight: 800;
  line-height: 28px;
  cursor: pointer;
`;
const StyledMinus = styled.p`
  height: 100%;
  font-family: Montserrat;
  font-weight: 400;
  color: ${(props) => (props.color ? `${props.color}` : "white")};
  margin: 0px;
  padding-top: 4px;
  font-size: 31px;
  font-weight: 800;
  line-height: 28px;
  cursor: pointer;
`;

const Share = styled(ShareIcon)`
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.color ? `${props.color}` : "white")};
`;
const TinyShare = styled(ShareIcon)`
  width: 13px;
  height: 13px;
  transform: rotate(45deg);
  fill: ${(props) => (props.color ? `${props.color}` : "white")};
`;
const StyledFacebookIcon = styled(FacebookIconSVG)`
  /* background-color: black; */
  .symbol {
    fill: aliceblue;
    background-color: white;
  }
  color: white;
`;
//ELEMENTS
export const StyledDownload = ({ color }: Props) => {
  return <Download color={color}></Download>;
};
export const StyledShare = ({ color }: Props) => {
  return <Share color={color}></Share>;
};
export const StyledTinyShare = ({ color }: Props) => {
  return <TinyShare color={color}></TinyShare>;
};
export const StyledArrow = ({ color }: Props) => {
  return <Arrow color={color}></Arrow>;
};

export const Plus = ({ color }: any) => {
  return <StyledPlus color={color}>+</StyledPlus>;
};
export const Minus = ({ color }: any) => {
  return <StyledMinus color={color}>-</StyledMinus>;
};
export const FacebookIcon = ({ color }: any) => {
  return <StyledFacebookIcon color={color}></StyledFacebookIcon>;
};
