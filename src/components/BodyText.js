import React, { Component } from 'react';
import styled from 'styled-components';

const BodyText = styled.p`
  font-family: ${props => props.theme.fonts.secondaryFont};
  color: ${props =>
    props.secondary ? props.theme.colors.white : props.theme.colors.black};
  font-weight: normal;
  font-size: 16px;
  line-height: 33px;
`;

export default BodyText;
