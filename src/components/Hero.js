import React from "react";
import styled from "styled-components";
import mq from "utils/mq";

const Container = styled.div`
  position: relative;
  background: ${props => `url(${props.src}) ${props.theme.colors.white}`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  display: flex;
  flex-direction: column;
  ${mq.desktop`
    flex-direction: row;
  `};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  ${mq.desktop`
    flex-direction: row;
  `};
`;

const Overlay = styled.div`
  background: ${props => props.theme.colors.green};
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  ${mq.desktop`
    background: black;
    opacity: 0.4;
  `};
`;

const HeroWithContent = ({ src, width, children }) => {
  return (
    <Container src={src}>
      <Overlay />
      <Content>{children}</Content>
    </Container>
  );
};

export default HeroWithContent;
