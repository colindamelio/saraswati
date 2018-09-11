import React from 'react';
import styled from 'styled-components';
import mq from 'utils/mq';

const Container = styled.div`
  border-bottom: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: ${props =>
    props.src
      ? `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url(${
          props.src
        })`
      : `${props.theme.black}`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: ${props => props.theme.paddingDesktop};
  color: ${props => props.theme.white};
  ${mq.desktop`
    border-bottom: 5px solid white;
    flex-direction: ${props => (props.columns === 2 ? `row` : `column`)};
  `} ${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `} ${mq.mobile`
    padding: ${props => props.theme.paddingMobile};
  `};
`;

const Hero = ({ image, children, columns }) => {
  return (
    <Container src={image} columns={columns}>
      {children}
    </Container>
  );
};

export default Hero;
