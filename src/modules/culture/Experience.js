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
            With lush landscapes, beautiful beaches and ancient temples, your
            web development education is paired with an exciting discovery of
            this Indonesian island.
          </p>
          <p>
            Our retreats include cultural expeditions, traditional Balinese
            cuisine, and the opportunity for you to curate a list of activities
            that will nourish your mind, body and spirit.
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
