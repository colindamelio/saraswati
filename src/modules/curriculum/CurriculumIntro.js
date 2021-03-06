import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hero from 'components/Hero';
import H1 from 'components/H1';
import BodyTextLockup from 'components/BodyTextLockup';
import HeroImage from 'media/students.jpg';
import mq from 'utils/mq';

const Container = styled.section`
  display: flex;
  ${mq.desktop`
    height: calc(100vh - ${props => props.theme.navHeightDesktop});
  `};
  ${mq.tablet`
    min-height: 400px;
  `};
  ${mq.mobile`
    min-height: 300px;
  `};
`;

const CurriculumIntro = () => {
  return (
    <Container>
      <Hero image={HeroImage}>
        <H1 secondary>
          Our retreats are designed for beginners –{' '}
          <span className="bold">no prior experience is necessary.</span>
        </H1>
        <BodyTextLockup secondary>
          <p>
            Industry professionals lead you through our carefully designed
            curriculum. Each class is exercise-heavy, because as the saying
            goes: <span className="italic">practice makes perfect</span>.
          </p>
        </BodyTextLockup>
      </Hero>
    </Container>
  );
};

CurriculumIntro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CurriculumIntro;
