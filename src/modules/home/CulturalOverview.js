import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from 'utils/mq';
import Hero from 'components/Hero';
import H1 from 'components/H1';
import H2 from 'components/H2';
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
    href: '#applicationForm',
    variant: 'secondary',
    hasRoute: false,
  },
  {
    text: 'See All Activities',
    href: '/culture',
    variant: 'secondary',
    hasRoute: true,
  },
];

const CulturalOverview = ({ left }) => {
  return (
    <Hero image={experienceImage} columns={2}>
      <Column left>
        <H1 secondary>
          Providing you with <span className="bold">authentic</span> Balinese
          experiences.
        </H1>
      </Column>
      <Column>
        <Tout secondary ctas={ctas}>
          <p>
            Without a doubt,{' '}
            <span className="bold italic">Bali is beautiful</span>. Beyond the
            tropical forests and tranquil beaches, Saraswati retreats invites
            you to discover the island's rich cultural history and experience
            first-hand local traditions.
          </p>
          <br />
          <H2 secondary>Combining curriculum with culture.</H2>
          <p>
            Saraswati Retreats strives to educate beyond front-end fundamentals
            – you’ll experience local cuisine, traverse the natural landscape,
            and embrace what it means to be truly Balinese.
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
