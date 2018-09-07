import React from "react";
import styled from "styled-components";
import Tout from "./Tout";
import Image from "./Image";
import studentsImage from "media/students.jpg";
import mq from "../utils/mq";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  ${mq.desktop`
    flex-direction: row-reverse;
  `};
`;

const ImageContainer = styled.div`
  width: 100%;
  ${mq.desktop`
    width: 50%;
  `};
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  padding: ${props => props.theme.paddingDesktop};
  ${mq.desktop`
    width: 50%;
  `};
  ${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `};
  ${mq.mobile`
    padding: ${props => props.theme.paddingMobile};
  `};
`;

const Overview = (ctas) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={studentsImage} />
      </ImageContainer>
      <Content>
        <Tout
          title={'Front-End Fundamentals'}
          description={
            "With 10 days of in-class training, our goal is to ensure you have a strong foundation. Using HTML, CSS, and JAVASCRIPT, you will build your own website from scratch!\n No prior experience is required - just a desire to learn! It may be challenging, but we're excited to guide you through a comprehensive curriculum."
          }
          ctas={ctas}
        />
      </Content>
    </Container>
  );
};

export default Overview;
