import React from 'react';
import styled from 'styled-components';
import SplitHero from './SplitHero';
import H1 from './H1';
import BodyTextLockup from './BodyTextLockup';
import mainImage from 'media/bali-landscape-1.jpg';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: ${props => props.theme.primaryAccent};
`;

const LandingModule = ({ src, children }) => {
  return (
    <Container>
      <SplitHero src={mainImage}>
        <H1>
          At Saraswati Retreats, we believe your education should be{' '}
          <span className="semiBold">extraordinary</span>.
        </H1>
        <BodyTextLockup
          description={
            'Learn to code your own website in the heart of Bali. Apply for our 14-day retreat today!'
          }
        />
      </SplitHero>
    </Container>
  );
};

export default LandingModule;
