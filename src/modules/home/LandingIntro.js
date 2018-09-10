import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import H1 from 'components/H1';
import BodyTextLockup from 'components/BodyTextLockup';
import HeroImage from 'media/bali-landscape-1.jpg';

const Container = styled.section`
  display: flex;
  height: calc(100vh - 94px);
`;

const LandingIntro = () => {
  return (
    <Container>
      <SplitHero image={HeroImage}>
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

LandingIntro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default LandingIntro;
