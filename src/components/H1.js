import React from 'react';
import styled from 'styled-components';
import mq from './../utils/mq';

const H1 = styled.h1`
  font-family: ${props => props.theme.fonts.primaryFont};
  color: ${props =>
    props.secondary ? props.theme.colors.white : props.theme.colors.green};
  font-weight: normal;
  font-size: 46px;
  line-height: 79px;

  ${mq.mobile`
    font-size: 30px;
    line-height: 43px;
  `};
`;

export default H1;
