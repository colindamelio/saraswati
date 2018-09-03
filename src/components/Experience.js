import React from 'react';
import styled from 'styled-components';
import mq from './../utils/mq';
import Hero from './Hero';
import H1 from './H1';
import BodyText from './BodyText';
import Button from './Button';
import LinkButton from './LinkButton';
import experienceImage from './../media/bali-3-min.jpg';

const Container = styled.div``;

const Column = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 25px;

  ${mq.desktop`
    width: 50%;
  `};
`;

const Experience = () => {
  return (
    <Container>
      <Hero src={experienceImage}>
        <Column>
          <H1 secondary>Providing you authentic Balinese experiences.</H1>
        </Column>
        <Column>
          <BodyText secondary>
            Without a doubt, Bali is beautiful. However, most people who visit
            the island miss an opportunity to discover authentic Balinese
            Culture.
          </BodyText>
          <BodyText secondary>
            Saraswati Retreats strives to educate our guests beyond coding their
            website - experience local cuisine, traverse the landscape, and
            embrace what it means to be truly Balinese.
          </BodyText>
          <BodyText>
            <Button>Apply Today</Button>
            <LinkButton secondary>See All Activities</LinkButton>
          </BodyText>
        </Column>
      </Hero>
    </Container>
  );
};

export default Experience;
