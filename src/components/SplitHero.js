import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import mq from "utils/mq";

const Container = styled.div`
  background: ${props => props.theme.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  ${mq.desktop`
    flex-direction: row;
  `};
`;

const Image = styled.div`
  background: ${props => `url(${props.src}) ${props.theme.white}`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  flex-grow: 1;

  ${mq.tablet`
    max-height: 450px;
    min-height: 250px;
  `} ${mq.mobile`
    max-height: 220px;
    min-height: 200px;
  `};
`;

const Content = styled.div`
  width: 100%;
  padding: 25px;
  ${mq.desktop`
    width: 50%;
  `};
`;

const SplitHero = ({ src, width, children }) => {
  return (
    <Container>
      <Image src={src} />
      <Content>{children}</Content>
    </Container>
  );
};

export default SplitHero;

SplitHero.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number
};
