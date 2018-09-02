import React from 'react';
import styled from 'styled-components';
import HeroWithContent from './HeroWithContent';
import H1 from './H1';
import BodyText from './BodyText';
import mainImage from './../media/bali-4-min.jpg';

const Container = styled.div`
  background: blue;
  height: 100vh;
  display: flex;
`;

const Semibold = styled.span`
  font-weight: ${props => props.theme.weights.secondaryBold};
`;

const LandingModule = ({ src, width, children }) => {
  return (
    <Container>
      <HeroWithContent src={mainImage} width={50}>
        <H1>
          At Saraswati Retreats, we believe your education should be{' '}
          <Semibold>extraordinary</Semibold>.
        </H1>
        <BodyText>
          Learn to code your own website in the heart of Bali. Apply for our
          14-day retreat today!
        </BodyText>
      </HeroWithContent>
    </Container>
  );
};

export default LandingModule;
