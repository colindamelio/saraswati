import React from "react";
import styled from "styled-components";
import mq from "utils/mq";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background: ${props => props.theme.primaryAccent}
  color: ${props => props.theme.white};
  ${mq.desktop`
    flex-direction: row;
    background: ${props => props.src ? `linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)), url(${props.src})` : `${props.theme.primaryAccent}`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  `};
`;

const Hero = ({ src, children }) => {
  return (
    <Container src={src}>
      {children}
    </Container>
  );
};

export default Hero;
