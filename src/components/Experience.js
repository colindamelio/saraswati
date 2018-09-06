import React, { Fragment } from "react";
import styled from "styled-components";
import mq from "utils/mq";
import Hero from "./Hero";
import H1 from "./H1";
import BodyTextLockup from "./BodyTextLockup";
import Button from "./Button";
import Link from "./Link";
import experienceImage from "media/bali-3-min.jpg";

const Column = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 25px;

  ${mq.desktop`
    width: 50%;
  `};
`;

const Experience = () => {
  return (
    <Fragment>
      <Hero src={experienceImage}>
        <Column>
          <H1>Providing you authentic Balinese experiences.</H1>
        </Column>
        <Column>
          <BodyTextLockup
            description={"Without a doubt, Bali is beautiful. However, most people who visit the island miss an opportunity to discover authentic Balinese Culture."}
          />
          <BodyTextLockup
            description={"Saraswati Retreats strives to educate our guests beyond coding their website - experience local cuisine, traverse the landscape, and embrace what it means to be truly Balinese."}
          />
          <Button>Apply Today</Button>
          <Link>See All Activities</Link>
        </Column>
      </Hero>
    </Fragment>
  );
};

export default Experience;
