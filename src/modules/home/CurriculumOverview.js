import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import Tout from 'components/Tout';
import studentsImage from 'media/students.jpg';
import mq from '../../utils/mq';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  margin-bottom: 2px;
  ${mq.desktop`
    flex-direction: row-reverse;
    margin-bottom: 5px;
  `};
`;

const ctas = [
  {
    text: 'Apply Now',
    href: '#',
    variant: 'primary',
  },
  {
    text: 'See All Activities',
    href: '#',
    variant: 'primary',
  },
];

const CurriculumOverview = ({ isReversed }) => {
  return (
    <Container>
      <SplitHero image={studentsImage} isReversed>
        <Tout title={'Front-End Fundamentals'} ctas={ctas}>
          <p>
            <span className="bold">With 10 days of in-class training</span>, our
            goal is to ensure you have a strong foundation. Using HTML, CSS and
            JAVASCRIPT, you will build your own website from scratch!
          </p>
          <p>
            <span className="bold">
              {' '}
              No prior experience is required – just a desire to learn!
            </span>{' '}
            It may be challenging, but we’re excited to guide you through a
            comprehensive curriculum.
          </p>
        </Tout>
      </SplitHero>
    </Container>
  );
};

CurriculumOverview.defaultProps = {
  ctas: [],
};

CurriculumOverview.propTypes = {
  ctas: PropTypes.array,
  title: PropTypes.string,
  isReversed: PropTypes.bool,
};

export default CurriculumOverview;
