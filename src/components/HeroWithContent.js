import React from 'react';
import styled from 'styled-components';
import mq from './../utils/mq';

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  background: ${props => `url(${props.src}) ${props.theme.colors.white}`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  flex-grow: 1;

  ${mq.tablet`
    max-height: 450px;
  `} ${mq.mobile`
    max-height: 220px;
  `};
`;

const Content = styled.div`
  width: 100%;
  padding: 25px;
  ${mq.desktop`
    width: ${props => `${props.width}%`};
  `};
`;

const HeroWithContent = ({ src, width, children }) => {
  return (
    <Container>
      <Image src={src} />
      <Content width={width}>{children}</Content>
    </Container>
  );
};

export default HeroWithContent;
