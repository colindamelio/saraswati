import React from 'react';
import styled from 'styled-components';

const Container = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: ${props => props.theme.colors.black};
`;

const Icon = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

export default Icon;
