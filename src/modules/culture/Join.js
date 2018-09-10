import React from 'react';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import TempleImage from 'media/temple-keeper.jpg';
import Tout from 'components/Tout';
import mq from 'utils/mq';

const LearnMore = styled.p`
  margin-top: ${props => props.theme.paddingDesktop}
  color: ${props => props.theme.white};
  a {
    color: ${props => props.theme.white};
    text-decoration: underline;
  }
  ${mq.tablet`
    margin-top: ${props => props.theme.paddingTablet}
  `};
  ${mq.mobile`
    margin-top: ${props => props.theme.paddingMobile}
  `};
`;

const ctas = [
  {
    text: 'Apply Now',
    href: '#',
    variant: 'secondary',
  },
];

const Join = ({ secondary }) => {
  return (
    <SplitHero image={TempleImage} secondary>
      <Tout title={'Join one of our upcoming retreats!'} ctas={ctas} secondary>
        <p>
          We accept a limited number of students each retreat to ensure you’re
          provided quality training.{' '}
          <span className="bold">Reserve your spot today!</span>
        </p>
      </Tout>
      <LearnMore>
        Curious about our curriculum?{' '}
        <a href="/curriculum">Click here to learn more</a>.
      </LearnMore>
    </SplitHero>
  );
};

export default Join;
