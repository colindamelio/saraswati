import React, { Component } from 'react';
import HeroWithContent from './../components/HeroWithContent';
import Navigation from './../components/Navigation';
import LandingModule from './../components/LandingModule';
import H2 from './../components/H2';
import BodyText from './../components/BodyText';
import devImage from './../media/bali-1-min.jpg';

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
      </div>
    );
  }
}
