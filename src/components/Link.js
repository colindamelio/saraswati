import styled from "styled-components";

const Link = styled.a`
  color: ${props => props.secondary ? props.theme.white : props.theme.black};
  font-family: ${props => props.theme.secondaryFont};
  font-weight: ${props => props.theme.bold};
  text-transform: ${props => props.theme.ctaCasing};
  text-decoration: none;
`;

export default Link;
