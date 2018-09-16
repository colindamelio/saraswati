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
  border-bottom: 2px solid white;
  ${mq.desktop`
    border-bottom: 5px solid white;
    flex-direction: row-reverse;
  `};
`;

const ctas = [
  {
    text: 'Apply Now',
    href: '#applicationForm',
    variant: 'primary',
    hasRoute: false,
  },
  {
    text: 'Curriculum Overview',
    href: '/curriculum',
    variant: 'primary',
    hasRoute: true,
  },
];

const CurriculumOverview = ({ isReversed }) => {
  return (
    <Container>
      <SplitHero image={studentsImage} isReversed>
        <Tout title={'Front-End Fundamentals'} ctas={ctas}>
          <p>
            <span className="bold">With 10 days of in-class training</span>, our
            goal is to ensure you have the knowledge, tools and support to begin
            your web development journey. Using HTML, CSS and JavaScript, you
            will build your own website from scratch!
          </p>
          <p>
            <span className="bold">
              {' '}
              No prior experience is required – just a desire to learn!
            </span>{' '}
            To preserve a 4:1 student-mentor ratio, we accept only 12 students
            for each retreat to ensure you’re provided quality training. It may
            be challenging, but we’re excited to guide you through a
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
