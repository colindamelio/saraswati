import React, { Fragment } from 'react';
import PageContent from 'modules/PageContent';
import CultureIntro from '../modules/culture/CultureIntro';
import Experience from '../modules/culture/Experience';
import CultureInformation from '../modules/culture/CultureInformation';
import Join from '../modules/Join';

const Culture = props => {
  return (
    <Fragment>
      <PageContent>
        <CultureIntro />
        <Experience />
        <CultureInformation />
        <Join culture />
      </PageContent>
    </Fragment>
  );
};

export default Culture;
