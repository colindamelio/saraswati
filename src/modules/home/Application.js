import React from 'react';
import SplitHero from 'components/SplitHero';
import Form from 'components/Form';
import H1 from 'components/H1';
import TempleImage from 'media/cooking-5.jpg';

const Application = () => {
  return (
    <SplitHero image={TempleImage} id="applicationForm">
      <H1>
        <span className="bold">Apply today</span> for an upcoming retreat!
      </H1>
      <Form />
    </SplitHero>
  );
};

export default Application;
