import React from "react";
import styled from "styled-components";
import HeroWithContent from "./HeroWithContent";
import BodyTextLockup from "./BodyTextLockup";
import LinkButton from "./LinkButton";
import devImage from "media/bali-1-min.jpg";

const Container = styled.div``;

const Overview = () => {
  return (
    <Container>
      <HeroWithContent src={devImage} width={50}>
        <BodyTextLockup
          title={"Front-End Fundamentals"}
          description={"With 10 days of in-class training, our goal is to ensure you have a strong foundation. Using HTML, CSS, and JAVASCRIPT, you will build your own website from scratch!\n No prior experience is required - just a desire to learn! It may be challenging, but we're excited to guide you through a comprehensive curriculum."}
        />
          <LinkButton>Course Overview</LinkButton>
      </HeroWithContent>
    </Container>
  );
};

export default Overview;
