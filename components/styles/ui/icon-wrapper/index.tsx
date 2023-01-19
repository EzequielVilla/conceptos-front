import { Root } from "./styled";

interface Props {
  children: React.ReactNode;
  backgroundColor?: string;
  onClick: (input?: any) => any;
}

export const IconCircleWrapper = ({
  children,
  backgroundColor,
  onClick,
}: Props) => {
  return (
    <Root color={backgroundColor} onClick={onClick}>
      {children}
    </Root>
  );
};
