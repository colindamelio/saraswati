import styled from 'styled-components';

const H2 = styled.h2`
  color: ${props =>
    props.secondary ? props.theme.white : props.theme.secondaryAccent};
  font-weight: ${props => props.theme.bold};
  font-size: ${props => props.theme.subtitleDesktop};
  line-height: ${props => props.theme.titleLineHeight};

  ${mq.mobile`
    font-size: ${props => props.theme.subtitleMobile};
  `};
`;

export default H2;
