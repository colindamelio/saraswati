import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from './../components/Hero';
import HeroWithContent from './../components/HeroWithContent';
import Navigation from './../components/Navigation';
import LandingModule from './../components/LandingModule';
import H1 from './../components/H1';
import H2 from './../components/H2';
import BodyText from './../components/BodyText';
import Button from './../components/Button';
import devImage from './../media/bali-1-min.jpg';
import bali from './../media/bali-3-min.jpg';
import mq from './../utils/mq';

const Column = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 25px;

  ${mq.desktop`
    width: 50%;
  `};
`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <LandingModule />
        <Navigation />
        <HeroWithContent src={devImage} width={50}>
          <H2>Front-End Fundamentals</H2>
          <BodyText>
            With 10 days of in-class training, our goal is to ensure you have a
            strong foundation. Using HTML, CSS, and JAVASCRIPT, you will build
            your own website from scratch!
          </BodyText>
          <BodyText>
            No prior experience is required - just a desire to learn! It may be
            challenging, but we're excited to guide you through a comprehensive
            curriculum.
          </BodyText>
        </HeroWithContent>
        <Hero src={bali}>
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
              Saraswati Retreats strives to educate our guests beyond coding
              their website - experience local cuisine, traverse the landscape,
              and embrace what it means to be truly Balinese.
            </BodyText>
            <BodyText>
              <Button>Apply Today</Button>
              <Button secondary>See All Activities</Button>
            </BodyText>
          </Column>
        </Hero>
      </div>
    );
  }
}
