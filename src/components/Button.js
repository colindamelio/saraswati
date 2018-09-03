import React, { Component } from 'react';
import styled from 'styled-components';
import mq from './../utils/mq';

const Button = styled.button`
  max-width: 180px;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-weight: ${props => props.theme.weights.primaryBold};
  font-size: 14px;
  color: ${props => props.theme.colors.white};
  background: ${props =>
    props.secondary ? 'none' : props.theme.colors.orange};
  text-transform: uppercase;
  padding: 15px;
  border: ${props =>
    props.secondary ? `4px solid ${props.theme.colors.white}` : 'none'};
`;

export default Button;
