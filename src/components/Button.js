import styled from "styled-components";

const Button = styled.button`
  padding: ${props => props.theme.ctaPadding};
  background: ${props => props.theme.secondaryAccent};
  border: none;
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.bold};
  font-size: ${props => props.theme.ctaFontSize};
  text-transform: ${props => props.theme.ctaCasing};
  cursor: pointer;
  &:nth-child(n+2) {
    background: none;
    border: none;
    color: ${props => props.theme.black};
    padding: 0;
    margin-left: 30px;
  }

  &.secondary {
    background: none;
    border: ${props => props.theme.ctaBorder};
    border-color: ${props => props.theme.white};
    &:nth-child(n+2) {
      border: none;
      color: ${props => props.theme.white};
      padding: 0;
      margin-left: 30px;
    }
  }
`;

export default Button;
