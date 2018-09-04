import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Body = styled.p`
  margin: 0 0 25px 0;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-weight: normal;
  font-size: 16px;
  color: ${props =>
    props.secondary ? props.theme.colors.white : props.theme.colors.black};
  line-height: 33px;
`;

const BodyText = ({ className, children, secondary }) => {
  return (
    <Body className={className} secondary={secondary}>
      {children}
    </Body>
  );
};

export default BodyText;

BodyText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
