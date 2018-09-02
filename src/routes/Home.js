import React, { Component } from 'react';
import HeroWithContent from './../components/HeroWithContent';
import Navigation from './../components/Navigation';
import LandingModule from './../components/LandingModule';

export default class Home extends Component {
  render() {
    return (
      <div>
        <LandingModule />
        <Navigation />
      </div>
    );
  }
}
