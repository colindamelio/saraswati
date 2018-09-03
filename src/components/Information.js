import React from "react";
import styled from "styled-components";
import mq from "./../utils/mq";
import Image from "./../components/Image";
import H2 from "./H2";
import BodyText from "./BodyText";
import Button from "./Button";
import colImage1 from "./../media/bali-2-min.jpg";
import colImage2 from "./../media/bali-6-min.jpg";
import colImage3 from "./../media/bali-7-min.jpg";

const Container = styled.div`
  display: flex;
  padding: 50px;
  ${mq.tablet`
    padding: 50px 15px;
  `} ${mq.mobile`
    flex-direction: column;
    padding: 30px 0;
  `};
`;

const InfoColumn = styled.div`
  flex-grow: 1;
  width: calc(1 / 3 * 100%);
  padding: 0 10px;
  ${mq.mobile`
    width: 100%;
    padding: 0 25px 30px;
  `};
`;

const Conditions = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.black};
`;

const Bold = styled.span`
  font-weight: ${props => props.theme.weights.primaryBold};
`;

const ListItem = styled.li`
  font-family: ${props => props.theme.fonts.secondaryFont};
  font-weight: normal;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  line-height: 33px;
`;

const Information = () => {
  return (
    <Container>
      <InfoColumn>
        <Image src={colImage1} alt="" />
        <H2>Upcoming Retreats</H2>
        <BodyText>
          <Bold>February 10-23, 2019</Bold>
          <br />
          Register by December 15, 2018 to be eligible for our Early Bird
          Pricing!
        </BodyText>
        <BodyText>
          A non-refundable $500USD deposit is required to secure your spot on
          all retreats.
        </BodyText>
        <Button>Apply Today</Button>
      </InfoColumn>
      <InfoColumn>
        <Image src={colImage2} alt="" />
        <H2>What's Included</H2>
        <ul>
          <ListItem>13 nights accomodation</ListItem>
          <ListItem>10 days of in-class training</ListItem>
          <ListItem>Breakfast & lunch (weekdays)</ListItem>
          <ListItem>5 scheduled dinners</ListItem>
          <ListItem>1 traditional Balinese cooking class (5 hours)</ListItem>
          <ListItem>Morning meditation & yoga</ListItem>
        </ul>
        <BodyText>
          <Bold>Note:</Bold> Please be sure to bring your own personal laptop.
          Flight costs not included. Airport transfer can be arranged for an
          additional fee.
        </BodyText>
      </InfoColumn>
      <InfoColumn>
        <Image src={colImage3} alt="" />
        <H2>Early Bird Price - $2999USD</H2>
        <BodyText>
          Save big when you register early for upcoming retreats! See retreat
          dates for Early Bird cut-off.
        </BodyText>
        <H2>Regular Price - $3499USD</H2>
        <BodyText>
          We accept a limited number of students each retreat to ensure you're
          provided with quality training. Reserve your spot today!
        </BodyText>
        <Conditions>
          <sup>*</sup>
          Rates are based on 2-person occupancy.
        </Conditions>
      </InfoColumn>
    </Container>
  );
};

export default Information;
