import React, {Fragment} from "react";
import LandingModule from "components/LandingModule";
import Overview from "components/Overview";
import Experience from "components/Experience";
import Accommodations from "../components/Accommodations";
import Information from "components/Information";
import ApplicationForm from "components/ApplicationForm";
import data from "data/pages/home.json";

const Home = props => {
  return (
    <Fragment>
      {data.landingModule && <LandingModule {...data.landingModule} />}
      {data.overview && <Overview {...data.overview} />}
      {data.experience && <Experience {...data.experience} />}
      {data.accommodations && <Accommodations {...data.accommodations} />}
      {data.information && <Information {...data.information} />}
      {data.application && <ApplicationForm {...data.application} />}
    </Fragment>
  );
};

export default Home;
