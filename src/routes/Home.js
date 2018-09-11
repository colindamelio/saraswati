import React, { Fragment } from 'react';
import LandingIntro from 'modules/home/LandingIntro';
import CurriculumOverview from 'modules/home/CurriculumOverview';
import CulturalOverview from 'modules/home/CulturalOverview';
import Accommodations from 'modules/home/Accommodations';
import RetreatInformation from 'modules/home/RetreatInformation';
import Application from 'modules/home/Application';

const Home = props => {
  return (
    <Fragment>
      <LandingIntro />
      <CurriculumOverview />
      <CulturalOverview />
      <Accommodations />
      <RetreatInformation />
      <Application />
    </Fragment>
  );
};

export default Home;
