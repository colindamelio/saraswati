import React, { Fragment } from 'react';
import styled from 'styled-components';
import HeroWithContent from './HeroWithContent';
import H1 from './H1';
import ApplicationForm from './ApplicationForm';
import reflection from 'media/bali-tall-2-min.jpg';

const Application = () => {
  return (
    <Fragment>
      <HeroWithContent src={reflection} width={50}>
        <H1>
          <b>Apply today</b> for an upcoming retreat!
        </H1>
        <ApplicationForm />
      </HeroWithContent>
    </Fragment>
  );
};

export default Application;
