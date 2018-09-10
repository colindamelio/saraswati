import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from 'utils/mq';
import Hero from 'components/Hero';
import H1 from 'components/H1';
import Tout from 'components/Tout';
import experienceImage from 'media/painter.jpg';

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
    text: 'Apply Now',
    href: '#',
    variant: 'secondary',
  },
  {
    text: 'See All Activities',
    href: '#',
    variant: 'secondary',
  },
];

const CulturalOverview = ({ left }) => {
  return (
    <Hero image={experienceImage} columns={2}>
      <Column left>
        <H1 secondary>
          Providing you an <span className="bold">authentic</span> Balinese
          Experience.
        </H1>
      </Column>
      <Column>
        <Tout secondary ctas={ctas}>
          <p>
            Without a doubt,{' '}
            <span className="bold italic">Bali is beautiful</span>. However,
            most people who visit the island miss an opportunity to discover
            authentic Balinese Culture.
          </p>
          <p>
            Saraswati Retreats strives to educate our guests beyond coding their
            website – experience local cuisine, traverse the landscape, and
            embrace what it means to be truly Balinese.
          </p>
        </Tout>
      </Column>
    </Hero>
  );
};

CulturalOverview.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.array,
};

export default CulturalOverview;
