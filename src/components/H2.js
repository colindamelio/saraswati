import styled from 'styled-components';

const H2 = styled.h2`
  margin: 0;
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${props =>
    props.secondary ? props.theme.colors.white : props.theme.colors.orange};
  font-weight: ${props => props.theme.weights.primaryBold};
  font-size: 24px;
  line-height: 33px;
`;

export default H2;
