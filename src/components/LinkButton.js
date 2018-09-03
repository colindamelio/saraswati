import React, { Component } from 'react';
import styled from 'styled-components';
import mq from './../utils/mq';

const LinkButton = styled.button`
  max-width: 180px;
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-weight: ${props => props.theme.weights.primaryBold};
  font-size: 14px;
  color: ${props =>
    props.secondary ? props.theme.colors.white : props.theme.colors.black};
  background: none;
  text-transform: uppercase;
  padding: 15px;
  border: none;
`;

export default LinkButton;
