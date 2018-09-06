import styled from "styled-components";

const Button = styled.button`
  padding: ${props => props.theme.ctaPadding};
  background: ${props =>
    props.secondary ? "none" : props.theme.secondaryAccent};
  border: ${props =>
    props.secondary ? props.theme.ctaBorder : "none"};
  border-color: ${props =>
    props.secondary ? props.theme.white : "none"};
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.bold};
  font-size: ${props => props.theme.ctaFontSize};
  text-transform: ${props => props.theme.ctaCasing};
`;

export default Button;
