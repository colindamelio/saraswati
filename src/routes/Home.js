import React, {Fragment} from "react";
import LandingModule from "pageModules/LandingModule";
import Overview from "pageModules/Overview";
import Experience from "pageModules/Experience";
import Accommodations from "../pageModules/Accommodations";
import Information from "pageModules/Information";
import Application from "pageModules/Application";

const Home = props => {
  return (
    <Fragment>
      <LandingModule />
      <Overview />
      <Experience />
      <Accommodations />
      <Information />
      <Application />
    </Fragment>
  );
};

export default Home;
