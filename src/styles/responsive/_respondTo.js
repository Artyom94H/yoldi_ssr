import { css } from 'styled-components';
import { breakpoints, deviceBreakpoints } from './_variables';

export const respondTo = Object.keys(deviceBreakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${deviceBreakpoints[label]?.min}) and (max-width: ${deviceBreakpoints[label]?.max}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
