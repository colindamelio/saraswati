import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import H2 from './H2';
import mq from '../utils/mq';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  font-size: ${props => props.theme.bodyTextDesktop};
  line-height: ${props => props.theme.descriptionLineHeight};
  color: ${props => (props.secondary ? props.theme.white : props.theme.black)};
  span {
    &.bold {
      font-weight: ${props => props.theme.bold};
    }
    &.italic {
      font-style: italic;
    }
  }
  a {
    font-weight: ${props => props.theme.bold};
    color: ${props =>
      props.secondary ? props.theme.white : props.theme.primaryAccent};
    text-decoration: underline;
  }

  p {
    margin-bottom: 0;
  }
`;

const BodyTextLockup = ({ title, secondary, children }) => {
  return (
    <Container>
      {title && <H2 secondary={secondary}>{title}</H2>}
      {children && <Description secondary={secondary}>{children}</Description>}
    </Container>
  );
};

export default BodyTextLockup;

BodyTextLockup.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
