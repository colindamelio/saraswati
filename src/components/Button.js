import React, { Component } from 'react';
import styled from 'styled-components';
import mq from './../utils/mq';

const Button = styled.button`
  max-width: 180px;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-weight: ${props => props.theme.weights.secondaryBold};
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.orange};
  text-transform: uppercase;
  margin-top: 50px;
  padding: 15px;
  border: none;
`;

export default Button;
