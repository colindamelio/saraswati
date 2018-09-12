import React, { Fragment } from 'react';
import PageContent from 'modules/PageContent';
import CurriculumIntro from '../modules/curriculum/CurriculumIntro';
import LearningEnvironment from '../modules/curriculum/LearningEnvironment';
import CurriculumInformation from '../modules/curriculum/CurriculumInformation';
import Join from '../modules/Join';

const Curriculum = props => {
  return (
    <Fragment>
      <PageContent>
        <CurriculumIntro />
        <LearningEnvironment />
        <CurriculumInformation />
        <Join curriculum />
      </PageContent>
    </Fragment>
  );
};

export default Curriculum;
