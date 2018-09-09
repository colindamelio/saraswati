import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import H1 from 'components/H1';
import BodyTextLockup from 'components/BodyTextLockup';
import landingImage from 'media/bali-landscape-1.jpg';

const Container = styled.section`
  display: flex;
  height: 100vh;
`;

const LandingModule = () => {
  return (
    <Container>
      <SplitHero image={landingImage}>
        <H1>
          At Saraswati Retreats, we believe your education should be{' '}
          <span className="bold">extraordinary.</span>
        </H1>
        <BodyTextLockup>
          <p className="header">
            Learn to code your own website in the heart of Bali.{' '}
            <a href="#">Apply</a> for our 14-day retreat today!
          </p>
        </BodyTextLockup>
      </SplitHero>
    </Container>
  );
};

LandingModule.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default LandingModule;
