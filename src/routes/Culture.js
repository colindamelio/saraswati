import React, { Fragment } from 'react';
import CultureIntro from '../modules/culture/CultureIntro';
import Experience from '../modules/culture/Experience';
import CultureInformation from '../modules/culture/CultureInformation';
import Join from '../modules/culture/Join';

const Culture = props => {
  return (
    <Fragment>
      <CultureIntro />
      <Experience />
      <CultureInformation />
      <Join />
    </Fragment>
  );
};

export default Culture;
