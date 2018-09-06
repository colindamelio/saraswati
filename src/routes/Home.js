import React, { Fragment } from 'react';
import Navigation from 'components/Navigation';
import LandingModule from 'components/LandingModule';
import Overview from 'components/Overview';
import Experience from 'components/Experience';
import Information from 'components/Information';
import Application from 'components/Application';

const Home = props => {
  return (
    <Fragment>
      <Navigation />
      <LandingModule />
      <Overview />
      <Experience />
      <Information />
      <Application />
    </Fragment>
  );
};

export default Home;
