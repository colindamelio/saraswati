import styled from 'styled-components';
import mq from 'utils/mq';

const H1 = styled.h1`
  width: 100%;
  font-family: ${props => props.theme.primaryFont};
  font-weight: ${props => props.theme.light};
  font-size: ${props => props.theme.heroTitleDesktop};
  line-height: ${props => props.theme.titleLineHeight};
  color: ${props =>
    props.secondary ? props.theme.white : props.theme.primaryAccent};
  span {
    &.bold {
      font-weight: ${props => props.theme.bold};
    }
  }
  ${mq.tablet`
    font-size: ${props => props.theme.heroTitleTablet};
  `};
  ${mq.mobile`
    font-size: ${props => props.theme.heroTitleMobile};
  `};
`;

export default H1;
