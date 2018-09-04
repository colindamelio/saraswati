import React from 'react';
import styled from 'styled-components';
import HeroWithContent from './HeroWithContent';
import H1 from './H1';
import BodyText from './BodyText';
import mainImage from 'media/bali-4-min.jpg';

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const Semibold = styled.span`
  font-weight: ${props => props.theme.weights.secondaryBold};
`;

const Header = styled(H1)`
  line-height: 79px;
  margin: 0 0 80px;
`;

const Text = styled(BodyText)`
  font-size: 24px;
`;

const HeroContent = styled(HeroWithContent)`
  padding: 100px 60px 35px 25px;
`;

const LandingModule = ({ src, width, children }) => {
  return (
    <Container>
      <HeroContent src={mainImage} width={50}>
        <Header>
          At Saraswati Retreats, we believe your education should be{' '}
          <Semibold>extraordinary</Semibold>.
        </Header>
        <Text>
          Learn to code your own website in the heart of Bali. Apply for our
          14-day retreat today!
        </Text>
      </HeroContent>
    </Container>
  );
};

export default LandingModule;
