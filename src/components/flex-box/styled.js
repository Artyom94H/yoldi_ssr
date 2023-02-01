import styled, { css } from 'styled-components';

export const StyledFlexbox = styled.div`
  display: flex;
 
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: ${({ justify = 'normal' }) => justify};

  ${({ centered = true }) => centered && css`
    align-items: center;
    justify-content: center;
  `}
`;
