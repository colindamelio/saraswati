import React, { Fragment } from 'react';
import styled from 'styled-components';
import PageContent from 'modules/PageContent';
import LandingIntro from 'modules/home/LandingIntro';
import CurriculumOverview from 'modules/home/CurriculumOverview';
import CulturalOverview from 'modules/home/CulturalOverview';
import Accommodations from 'modules/home/Accommodations';
import RetreatInformation from 'modules/home/RetreatInformation';
import Application from 'modules/home/Application';
import mq from 'utils/mq';

const Home = props => {
  return (
    <Fragment>
      <PageContent>
        <LandingIntro />
        <CurriculumOverview />
        <CulturalOverview />
        <Accommodations />
        <RetreatInformation />
        <Application />
      </PageContent>
    </Fragment>
  );
};

export default Home;
