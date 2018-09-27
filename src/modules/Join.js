import React from 'react';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import TempleImage from 'media/god-barong-2.jpg';
import LaptopImage from 'media/laptop.jpg';
import Tout from 'components/Tout';
import { NavLink } from 'react-router-dom';
import mq from 'utils/mq';

const LearnMore = styled.p`
  margin-top: ${props => props.theme.paddingDesktop}
  color: ${props => props.theme.white};
  line-height: ${props => props.theme.descriptionLineHeight};
  a {
    font-weight: ${props => props.theme.bold};
    color: ${props => props.theme.white};
    &:hover{
      text-decoration: underline;
    }
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
    text: 'Get In Touch',
    href: '/apply',
    variant: 'secondary',
    hasRoute: true,
  },
];

const Join = ({ secondary, culture }) => {
  const HeroImage = culture ? TempleImage : LaptopImage;
  return (
    <SplitHero image={HeroImage} secondary>
      <Tout title={'Join one of our upcoming retreats!'} ctas={ctas} secondary>
        <p>
          To preserve a 4:1 student-mentor ratio, we accept only 12 students for
          each retreat to ensure you’re provided quality training.{' '}
          <span className="bold">Reserve your spot today!</span>
        </p>
      </Tout>
      <LearnMore>
        Curious about our {culture ? `curriculum` : `cultural activities`}?{' '}
        <NavLink to={culture ? `/curriculum` : `culture`}>
          Click here to learn more
        </NavLink>
        .
      </LearnMore>
    </SplitHero>
  );
};

export default Join;
