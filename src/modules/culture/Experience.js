import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import Tout from 'components/Tout';
import Ganesha from 'media/statue-ganesha-3.jpg';
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

const Content = styled.div`
  width: 100%;
  height: auto;
  padding: ${props => props.theme.paddingDesktop};
  ${mq.desktop`
    width: 50%;
  `};
  ${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `};
  ${mq.mobile`
    padding: ${props => props.theme.paddingMobile};
  `};
`;

const ctas = [
  {
    text: 'Apply Today',
    href: '#',
    variant: 'secondary',
  },
];

const Experience = () => {
  return (
    <Container>
      <SplitHero image={Ganesha} secondary>
        <Tout title={'Authentic Balinese Experiences'} ctas={ctas} secondary>
          <p>
            <span className="bold">
              Bali has a distinctive aura like no other place in the world.
            </span>{' '}
            With breathtaking landscapes, tranquil beaches and ancient temples,
            your web development education is paired with an exciting discovery
            of this Indonesian island.
          </p>
          <p>
            Living in Bali since 2001, we’ve integrated our lives and built our
            home within the walls of local Balinese communities.{' '}
            <span className="bold">
              Saraswati Retreats is an invitation to discover another world most
              tourists never see.
            </span>{' '}
            You’ll actively join us on cultural expeditions, experience
            authentic Balinese cuisine, and be able to curate a personalized
            list of activities that nourishes your mind, body and spirit.
          </p>
        </Tout>
      </SplitHero>
    </Container>
  );
};

Experience.defaultProps = {
  ctas: [],
};

Experience.propTypes = {
  ctas: PropTypes.array,
  title: PropTypes.string,
  isReversed: PropTypes.bool,
};

export default Experience;
