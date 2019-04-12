import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import Tout from 'components/Tout';
import Ganesha from 'media/mount-agung.jpg';
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

const ctas = [
  {
    text: 'Get in touch',
    href: '/apply',
    variant: 'secondary',
    hasRoute: true,
  },
];

const AboutIntro = () => {
  return (
    <Container>
      <SplitHero image={Ganesha} secondary>
        <Tout title={'About Us'} ctas={ctas} secondary>
          <p>
            At Saraswati Retreats, we balance education and travel, providing
            you the same structure & support in our curriculum as you might
            experience back home, with the added value of an extraordinary
            learning environment – a luxurious villa in the heart of a beautiful
            Indonesian island.
          </p>
          <p>
            <span className="bold">
              Bali is breathtaking, with rich culture & traditions.
            </span>{' '}
            Along your journey, try authentic balinese cuisine in a hands-on
            cooking class; traverse through lush landscapes; visit one of the
            many temples; or relax at the beach. Our resident Cultural Liaison,
            Frances, curated an itinerary to experience it all – sharing local
            insights with each activity.
          </p>
          <p>
            The curriculum has been carefully designed by professional
            developers (with teaching experience).{' '}
            <span className="bold">
              We offer 30 hours of structured lesson planning, and over 30
              additional hours of mentorship available.
            </span>
          </p>
          <p>
            <span className="bold">With a 4:1 student-to-mentor ratio</span>,
            we’re here to ensure your success. At the end of this 11-day
            retreat, you’ll have built your own website from scratch and enjoyed
            the travel experience of a lifetime!
          </p>
        </Tout>
      </SplitHero>
    </Container>
  );
};

AboutIntro.defaultProps = {
  ctas: [],
};

AboutIntro.propTypes = {
  ctas: PropTypes.array,
  title: PropTypes.string,
  isReversed: PropTypes.bool,
};

export default AboutIntro;
