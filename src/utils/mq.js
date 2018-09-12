import { css } from 'styled-components';

export const devices = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
};

/**
 * styled.div`
 *   overflow: hidden;
 *   ${mq.mobile`
 *    width: 100%
 *   `}*
 */

const mq = {
  [devices.mobile]: (...args) =>
    css`
      @media screen and (max-width: 767px) {
        ${css(...args)};
      }
    `,
  [devices.tablet]: (...args) =>
    css`
      @media screen and (min-width: 768px) and (max-width: 1023px) {
        ${css(...args)};
      }
    `,
  [devices.desktop]: (...args) =>
    css`
      @media screen and (min-width: 1024px) {
        ${css(...args)};
      }
    `,
};

export default mq;
