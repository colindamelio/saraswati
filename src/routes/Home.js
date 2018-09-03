import React, { Component } from 'react';
import Navigation from './../components/Navigation';
import LandingModule from './../components/LandingModule';
import Overview from './../components/Overview';
import Experience from './../components/Experience';
import Information from './../components/Information';
import Application from './../components/Application';

export default class Home extends Component {
  render() {
    return (
      <div>
        <LandingModule />
        <Navigation />
        <Overview />
        <Experience />
        <Information />
        <Application />
      </div>
    );
  }
}
