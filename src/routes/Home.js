import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from './../components/Hero';
import HeroWithContent from './../components/HeroWithContent';
import Navigation from './../components/Navigation';
import LandingModule from './../components/LandingModule';
import ApplicationForm from './../components/ApplicationForm';
import H1 from './../components/H1';
import H2 from './../components/H2';
import BodyText from './../components/BodyText';
import Button from './../components/Button';
import LinkButton from './../components/LinkButton';
import Image from './../components/Image';
import devImage from './../media/bali-1-min.jpg';
import bali from './../media/bali-3-min.jpg';
import reflection from './../media/bali-tall-2-min.jpg';
import colImage1 from './../media/bali-2-min.jpg';
import colImage2 from './../media/bali-6-min.jpg';
import colImage3 from './../media/bali-7-min.jpg';
import mq from './../utils/mq';

const Column = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 25px;

  ${mq.desktop`
    width: 50%;
  `};
`;

const Bold = styled.span`
  font-weight: ${props => props.theme.weights.primaryBold};
`;

const InfoModule = styled.div`
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

export default class Home extends Component {
  render() {
    return (
      <div>
        <LandingModule />
        <Navigation />
        <HeroWithContent src={devImage} width={50}>
          <H2>Front-End Fundamentals</H2>
          <BodyText>
            With 10 days of in-class training, our goal is to ensure you have a
            strong foundation. Using HTML, CSS, and JAVASCRIPT, you will build
            your own website from scratch!
          </BodyText>
          <BodyText>
            No prior experience is required - just a desire to learn! It may be
            challenging, but we're excited to guide you through a comprehensive
            curriculum.
          </BodyText>
          <BodyText>
            <Button>Apply Today</Button>
            <LinkButton>Course Overview</LinkButton>
          </BodyText>
        </HeroWithContent>
        <Hero src={bali}>
          <Column>
            <H1 secondary>Providing you authentic Balinese experiences.</H1>
          </Column>
          <Column>
            <BodyText secondary>
              Without a doubt, Bali is beautiful. However, most people who visit
              the island miss an opportunity to discover authentic Balinese
              Culture.
            </BodyText>
            <BodyText secondary>
              Saraswati Retreats strives to educate our guests beyond coding
              their website - experience local cuisine, traverse the landscape,
              and embrace what it means to be truly Balinese.
            </BodyText>
            <BodyText>
              <Button>Apply Today</Button>
              <LinkButton secondary>See All Activities</LinkButton>
            </BodyText>
          </Column>
        </Hero>
        <InfoModule>
          <InfoColumn>
            <Image src={colImage1} />
            <H2>Upcoming Retreats</H2>
            <BodyText>
              <Bold>February 10-23, 2019</Bold>
              <br />
              Register by December 15, 2018 to be eligible for our Early Bird
              Pricing!
            </BodyText>
            <BodyText>
              A non-refundable $500USD deposit is required to secure your spot
              on all retreats.
            </BodyText>
            <Button>Apply Today</Button>
          </InfoColumn>
          <InfoColumn>
            <Image src={colImage2} />
            <H2>What's Included</H2>
            <BodyText>
              <ul>
                <li>13 nights accomodation</li>
                <li>10 days of in-class training</li>
                <li>Breakfast & lunch (weekdays)</li>
                <li>5 scheduled dinners</li>
                <li>1 traditional Balinese cooking class (5 hours)</li>
                <li>Morning meditation & yoga</li>
              </ul>
            </BodyText>
            <BodyText>
              <Bold>Note:</Bold> Please be sure to bring your own personal
              laptop. Flight costs not included. Airport transfer can be
              arranged for an additional fee.
            </BodyText>
          </InfoColumn>
          <InfoColumn>
            <Image src={colImage3} />
            <H2>Early Bird Price - $2999USD</H2>
            <BodyText>
              Save big when you register early for upcoming retreats! See
              retreat dates for Early Bird cut-off.
            </BodyText>
            <H2>Regular Price - $3499USD</H2>
            <BodyText>
              We accept a limited number of students each retreat to ensure
              you're provided with quality training. Reserve your spot today!
            </BodyText>
            <Conditions>
              <sup>*</sup>Rates are based on 2-person occupancy.
            </Conditions>
          </InfoColumn>
        </InfoModule>
        <HeroWithContent src={reflection} width={50}>
          <H1>
            <Bold>Apply today</Bold> for an upcoming retreat!
          </H1>
          <ApplicationForm />
        </HeroWithContent>
      </div>
    );
  }
}
