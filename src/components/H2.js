import styled from 'styled-components';
import mq from 'utils/mq';

const H2 = styled.h2`
  font-family: ${props => props.theme.primaryFont};
  font-weight: ${props => props.theme.bold};
  font-size: ${props => props.theme.subtitleDesktop};
  line-height: ${props => props.theme.titleLineHeight};
  color: ${props =>
    props.secondary ? props.theme.white : props.theme.secondaryAccent};
  ${mq.mobile`
    font-size: ${props => props.theme.subtitleMobile};
  `};
`;

export default H2;
