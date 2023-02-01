import styled, { css } from 'styled-components';
import { respondTo } from '@/styles/responsive/_respondTo';

const ResponsiveBlock = styled.span`
  display: none;
  position: relative;
  ${({ show = {}, display = 'block' }) => {
    return css`
      ${respondTo.xxl`
        display: ${show.xxl ? display : 'none'} !important;
      `}
      ${respondTo.xl`
        display: ${show.xl ? display : 'none'} !important;
      `}
      ${respondTo.lg`
        display: ${show.lg ? display : 'none'} !important;
      `}
      ${respondTo.sm`
        display: ${show.sm ? display : 'none'} !important;
      `}       
      ${respondTo.md`
        display: ${show.md ? display : 'none'} !important;
      `}
      ${respondTo.xs`
        display: ${show.xs ? display : 'none'} !important;
      `}
      ${respondTo.micro`
        display: ${show.micro ? display : 'none'} !important;
      `}
    `;
  }}
`;

export default ResponsiveBlock;
