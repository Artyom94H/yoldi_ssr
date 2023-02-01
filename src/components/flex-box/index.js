import { StyledFlexbox } from '@/components/flex-box/styled';

const FlexBox = ({ centered, justify, children }) => {
  return <StyledFlexbox justify={justify} centered={centered}>{children}</StyledFlexbox>;
};

export default FlexBox;
