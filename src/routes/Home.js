import React, { Fragment } from 'react';
import PageContent from 'modules/PageContent';
import LandingIntro from 'modules/home/LandingIntro';
import CurriculumOverview from 'modules/home/CurriculumOverview';
import CulturalOverview from 'modules/home/CulturalOverview';
import Accommodations from 'modules/home/Accommodations';
import RetreatInformation from 'modules/home/RetreatInformation';
import CultureOnly from '../modules/home/CultureOnly';
import Application from 'modules/home/Application';

const Home = props => {
  return (
    <Fragment>
      <PageContent>
        <LandingIntro />
        <CurriculumOverview />
        <CulturalOverview />
        <Accommodations />
        <RetreatInformation />
        <CultureOnly />
        <Application />
      </PageContent>
    </Fragment>
  );
};

export default Home;
