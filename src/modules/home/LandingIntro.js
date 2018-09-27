import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import H1 from 'components/H1';
import BodyTextLockup from 'components/BodyTextLockup';
import HeroImage from 'media/test-4.jpg';
import { NavLink } from 'react-router-dom';
import mq from 'utils/mq';

const Container = styled.section`
  display: flex;
  border-bottom: 2px solid white;
  ${mq.desktop`
    border-bottom: 5px solid white;
    height: calc(100vh - ${props => props.theme.navHeightDesktop});
    min-height: 720px;
  `};
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
            <NavLink to="/apply">Apply</NavLink> for one of our 14-day retreats
            today!
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
