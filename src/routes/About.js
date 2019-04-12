import React, { Fragment } from 'react';
import PageContent from 'modules/PageContent';
import AboutIntro from '../modules/about/AboutIntro';
import Team from '../modules/about/Team';
import Join from '../modules/Join';

const About = props => {
  return (
    <Fragment>
      <PageContent>
        <AboutIntro />
        <Team />
        <Join culture />
      </PageContent>
    </Fragment>
  );
};

export default About;
