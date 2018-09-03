import styled from "styled-components";

const BodyText = styled.p`
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-weight: normal;
  font-size: 16px;
  color: ${props =>
    props.secondary ? props.theme.colors.white : props.theme.colors.black};
  line-height: 33px;
`;

export default BodyText;
