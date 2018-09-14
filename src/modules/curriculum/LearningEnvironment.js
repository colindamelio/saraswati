import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import Tout from 'components/Tout';
import studentsImage from 'media/villa-malaathina-3.jpg';
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

const LearningEnvironment = ({ secondary }) => {
  return (
    <Container>
      <SplitHero image={studentsImage} secondary>
        <Tout title={'Your learning environment'} secondary>
          <p>
            We are committed to providing an inclusive, safe classroom for all
            that choose to learn with us. Our 4:1 student to mentor ratio also
            means that you won’t ever feel left behind.
          </p>
          <p>
            <a
              href="http://www.villamalaathina.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Villa Malaathina
            </a>{' '}
            has wireless internet and a comfortable, air-conditioned conference
            room for us to conduct our lessons. After each class, you’ll also be
            invited to participate in a complimentary Yoga class – a perfect way
            to rest your mind and decompress.
          </p>
        </Tout>
      </SplitHero>
    </Container>
  );
};

LearningEnvironment.defaultProps = {};

LearningEnvironment.propTypes = {};

export default LearningEnvironment;
