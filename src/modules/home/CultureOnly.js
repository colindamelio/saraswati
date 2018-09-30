import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from 'utils/mq';
import Hero from 'components/Hero';
import H2 from 'components/H2';
import Tout from 'components/Tout';
import HeroImage from 'media/wood-texture-3.jpg';

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mq.desktop`
    width: 50%;
    padding: ${props => (props.left ? `50px 50px 50px 0` : `50px 0 50px 50px`)};
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

const CultureOnly = () => {
  return (
    <Hero image={HeroImage} columns={2}>
      <Column left>
        <H2 secondary>
          Want to discover Bali, but not interested in learning how to code?
        </H2>
        <br />
      </Column>
      <Column>
        <Tout secondary ctas={ctas}>
          We understand that you (or someone you're traveling with) may not be
          interested in our curriculum.{' '}
          <span className="bold">
            Saraswati Bali Retreats invites everyone to discover Balinese
            Culture
          </span>, and are happy to curate personalized itineraries outside of
          the classroom.
        </Tout>
      </Column>
    </Hero>
  );
};

CultureOnly.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.array,
};

export default CultureOnly;
