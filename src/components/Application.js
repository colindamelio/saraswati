import React, { Fragment } from "react";
import HeroWithContent from "./HeroWithContent";
import H1 from "./H1";
import ApplicationForm from "./ApplicationForm";
import Bold from "./Bold";
import reflection from "media/bali-tall-2-min.jpg";

const Application = () => {
  return (
    <Fragment>
      <HeroWithContent src={reflection} width={50}>
        <H1>
          <Bold>Apply today</Bold> for an upcoming retreat!
        </H1>
        <ApplicationForm />
      </HeroWithContent>
    </Fragment>
  );
};

export default Application;
