import React from 'react';
import styled from 'styled-components';
import mq from 'utils/mq';

const PageContent = styled.div`
  margin-top: ${props => props.theme.navHeightDesktop};
  ${mq.tablet`
    margin-top: ${props => props.theme.navHeightTablet}
  `} ${mq.mobile`
    margin-top: ${props => props.theme.navHeightMobile}
  `};
`;

export default PageContent;
