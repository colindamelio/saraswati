import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mq from 'utils/mq';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 300px;
  ${mq.desktop`
    flex-direction: ${props => (props.isReversed ? 'row-reverse' : 'row')};
  `};
`;

const HeroImage = styled.div`
  background: ${props =>
    props.src ? `url(${props.src})` : `${props.theme.primaryAccent}`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex-grow: 1;
  ${mq.tablet`
    min-height: 400px;
  `} ${mq.mobile`
    min-height: 300px;
  `};
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  padding: ${props => props.theme.paddingDesktop};
  background: ${props =>
    props.secondary ? props.theme.primaryAccent : 'none'};
  ${mq.desktop`
    width: 50%;
  `};
  ${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `};
  ${mq.mobile`
    padding: ${props => props.theme.paddingMobile};
  `};
`;

const SplitHero = ({ id, image, children, secondary, isReversed }) => {
  return (
    <Container id={id} isReversed={isReversed}>
      <HeroImage src={image} />
      <Content secondary={secondary}>{children}</Content>
    </Container>
  );
};

SplitHero.defaultProps = {
  ctas: [],
};

SplitHero.propTypes = {
  image: PropTypes.string,
  secondary: PropTypes.bool,
  isReversed: PropTypes.bool,
};

export default SplitHero;
