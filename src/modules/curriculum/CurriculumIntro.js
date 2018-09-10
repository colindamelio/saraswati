import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hero from 'components/Hero';
import H1 from 'components/H1';
import BodyTextLockup from 'components/BodyTextLockup';

const Container = styled.section`
  display: flex;
  height: calc(100vh - 94px);
`;

const CurriculumIntro = () => {
  return (
    <Container>
      <Hero>
        <H1 secondary>
          Our retreats are designed for tech-savvy beginners –{' '}
          <span className="bold">no prior experience is necessary.</span>
        </H1>
        <BodyTextLockup secondary>
          <p className="header">
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
