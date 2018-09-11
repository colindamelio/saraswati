import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hero from 'components/Hero';
import H1 from 'components/H1';
import BodyTextLockup from 'components/BodyTextLockup';
import HeroImage from 'media/temple-saraswati-3.jpg';
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

const CultureIntro = () => {
  return (
    <Container>
      <Hero id={'CultureIntro'} image={HeroImage}>
        <H1 secondary>
          <span className="bold">Saraswati</span> is the Hindu Goddess of
          Knowledge, Music, Art, Wisdom and Learning.
        </H1>
        <BodyTextLockup secondary>
          <p>
            She inspired the perfect balance we’ve created between culture and
            curriculum. Our goal is to nourish your mind, body and spirit
            through quality education and authentic Balinese experiences. Join
            one of our retreats, and{' '}
            <span className="bold">discover the beauty of Bali.</span>
          </p>
        </BodyTextLockup>
      </Hero>
    </Container>
  );
};

CultureIntro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CultureIntro;
