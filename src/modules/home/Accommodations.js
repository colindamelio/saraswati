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
  ${mq.desktop`
    flex-direction: row;
  `};
`;

const Accommodations = ({ image, title, description, secondary }) => {
  return (
    <Container>
      <SplitHero image={VillaImage} secondary>
        <Tout title={'Your Accommodations'} secondary>
          <p>
            Located in the charming village of Umalas, near Seminyak, Villa
            Malaathina – set among 5,000 square metres of immaculate tropical
            gardens and surrounded by traditional Balinese rice paddies – is
            home for the duration of our retreat.
          </p>

          <p>
            For more information, visit the{' '}
            <a href="http://www.villamalaathina.com" secondary>
              Villa Malaathina Official Site
            </a>.
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
};

export default Accommodations;
