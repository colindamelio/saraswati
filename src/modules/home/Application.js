import React from 'react';
import SplitHero from 'components/SplitHero';
import Form from 'components/Form';
import H1 from 'components/H1';
import BodyTextLockup from 'components/BodyTextLockup';
import TempleImage from 'media/cooking-5.jpg';

const Application = () => {
  return (
    <SplitHero image={TempleImage} id="applicationForm">
      <H1>
        <span className="bold">Apply today</span> for an upcoming retreat!
      </H1>
      <BodyTextLockup>
        <p>
          <span className="bold">
            Start by completing the contact form below.
          </span>{' '}
          We'll send you more detailed information about your selected retreat,
          and schedule a call with our retreat organizer. They will be available
          to answer any questions, and provide you with next-steps in your
          application process.
        </p>
        <br />
      </BodyTextLockup>
      <Form />
    </SplitHero>
  );
};

export default Application;
