import React from "react";
import styled from "styled-components";
import Tout from "./Tout";
import Image from "./Image";
import Button from "./Button";
import villaImage from "media/villa-malaathina-1.jpg";
import mq from "../utils/mq";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 300px;
  ${mq.desktop`
    flex-direction: row;
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
  background: ${props => props.theme.primaryAccent};
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

const Accommodations = (ctas) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={villaImage} />
      </ImageContainer>
      <Content>
        <Tout secondary
          title={'Your Accommodations'}
          description={
            "Located in the charming village of Umalas, near Seminyak, Villa Malaathina - set among 5,000 square metres of immaculate tropical gardens and surrounded by traditional Balinese rice paddies - is home for the duration of our retreat. For more information, visit the Villa Malaanthina Official Site."
          }
          ctas={ctas}
        />
      </Content>
    </Container>
  );
};

export default Accommodations;
