import React from 'react';
import styled from 'styled-components';
import mq from 'utils/mq';
import HeroWithContent from './HeroWithContent';
import H1 from './H1';
import BodyText from './BodyText';
import Icon from './Icon';
import LinkButton from './LinkButton';
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
  ${mq.tablet`
    padding: 0 155px 0 0;
  `};
  ${mq.mobile`
    line-height: 43px;
    margin: 0 0 45px;
  `};
`;

const Text = styled(BodyText)`
  font-size: 24px;
  flex-grow: 1;
  ${mq.tablet`
    padding: 0 155px 0 0;
  `};
`;

const HeroContent = styled(HeroWithContent)`
  padding: 100px 60px 25px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  ${mq.desktop`
    flex-grow: 0;
    align-items: flex-start;
  `} ${mq.tablet`
    padding: 50px 25px 35px;
    max-height: 575px;
  `};
  ${mq.mobile`
    padding: 50px 25px 40px;
  `};
`;

const DiscoverButton = styled(LinkButton)`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Chevron = styled(Icon)`
  transform: rotate(90deg);
`;

const Link = styled.a`
  color: ${props => props.theme.colors.green}
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;;
  }
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
          Learn to code your own website in the heart of Bali.{' '}
          <Link>Apply</Link> for our 14-day retreat today!
        </Text>
        <DiscoverButton>
          <span>Discover More</span>
          <Chevron>chevron_right</Chevron>
        </DiscoverButton>
      </HeroContent>
    </Container>
  );
};

export default LandingModule;
