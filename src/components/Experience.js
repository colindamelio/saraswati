import React, { Fragment } from "react";
import styled from "styled-components";
import mq from "utils/mq";
import Hero from "./Hero";
import H1 from "./H1";
import Tout from "./Tout";
import Button from "./Button";
import Link from "./Link";
import experienceImage from "media/temple-courtyard.jpg";

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mq.desktop`
    width: 50%;
    padding: ${props => props.theme.paddingDesktop};
  `};
  ${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `};
  ${mq.mobile`
    padding: ${props => props.theme.paddingMobile};
  `};
`;

const Experience = () => {
  return (
    <Fragment>
      <Hero src={experienceImage}>
        <Column>
          <H1 secondary>Providing you authentic Balinese experiences.</H1>
        </Column>
        <Column>
          <Tout
            description={"Without a doubt, Bali is beautiful. However, most people who visit the island miss an opportunity to discover authentic Balinese Culture.Saraswati Retreats strives to educate our guests beyond coding their website - experience local cuisine, traverse the landscape, and embrace what it means to be truly Balinese."}
            cta={"Apply Today"}
          />
        </Column>
      </Hero>
    </Fragment>
  );
};

export default Experience;
