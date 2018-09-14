import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import Tout from 'components/Tout';
import VillaImage from 'media/villa-malaathina-1.jpg';
import mq from '../../utils/mq';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  border-bottom: 2px solid white;
  ${mq.desktop`
    border-bottom: 5px solid white;
    flex-direction: row;
  `};
`;

const Accommodations = ({ image, title, description, secondary }) => {
  return (
    <Container>
      <SplitHero image={VillaImage} secondary>
        <Tout title={'Your Accommodations'} secondary>
          <p>
            During our 2-week retreat, Villa Malaathina is your luxurious home.
            Located near Seminyak in the charming village of Umalas, Villa
            Malaathina is surrounded by 5,000 square metres of immaculate
            tropical gardens and traditional Balinese rice paddies.
          </p>
          <p>
            The villa boasts beautifully appointed bedrooms, a 25-meter pool,
            air-conditioned yoga studio and fitness facilities, a library, media
            room, and plenty of comfortable indoor and outdoor spaces to lounge.
          </p>
          <p>
            For more information, visit the{' '}
            <a href="http://www.villamalaathina.com" secondary>
              Villa Malaathina Official Site
            </a>
            .
          </p>
        </Tout>
      </SplitHero>
    </Container>
  );
};

Accommodations.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.array,
  secondary: PropTypes.bool,
};

export default Accommodations;
