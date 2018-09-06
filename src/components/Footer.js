import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  padding: ${props => props.theme.footerPaddingDesktop};
  background: ${props => props.theme.black};
`;

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;
