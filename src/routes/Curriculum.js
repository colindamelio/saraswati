import React, { Fragment } from 'react';
import CurriculumIntro from '../modules/curriculum/CurriculumIntro';
import LearningEnvironment from '../modules/curriculum/LearningEnvironment';
import CurriculumInformation from '../modules/curriculum/CurriculumInformation';
import Join from '../modules/Join';

const Curriculum = props => {
  return (
    <Fragment>
      <CurriculumIntro />
      <LearningEnvironment />
      <CurriculumInformation />
      <Join curriculum />
    </Fragment>
  );
};

export default Curriculum;
