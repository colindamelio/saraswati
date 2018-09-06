import React from 'react';
import styled from 'styled-components';
import HeroWithContent from './HeroWithContent';
import H1 from './H1';
import BodyText from './BodyText';
import mainImage from 'media/bali-4-min.jpg';

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const Semibold = styled.span`
  font-weight: ${props => props.theme.weights.secondaryBold};
`;

const Link = styled.a`
  color: ${props => props.theme.colors.green};
`;

const LandingModule = ({ src, width, children, strings }) => {
  return (
    <Container>
      <HeroWithContent src={mainImage} width={50}>
        <H1>{strings['landing/first/title'](Semibold)}</H1>
        <BodyText>{strings['landing/first/description'](Link)}</BodyText>
      </HeroWithContent>
    </Container>
  );
};

export default LandingModule;
