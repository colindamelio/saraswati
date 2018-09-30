import React, { Component } from 'react';
import styled from 'styled-components';
import Tout from 'components/Tout';
import H2 from 'components/H2';
import mq from '../../utils/mq';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 2px solid white;
  ${mq.desktop`
    border-bottom: 5px solid white;
    flex-direction: row;
    padding: ${props => props.theme.paddingDesktop};
  `}
  ${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `}
  ${mq.mobile`
    flex-direction: column;
    padding: ${props => props.theme.paddingMobile};
  `}
`;

const InfoColumn = styled.div`
  ${mq.desktop`
    width: calc(100%/3 - 35px);
  `}
  ${mq.tablet`
    width: calc(50% - 25px);
    &:first-child{
      width: 100%;
    }
    &:not(:first-child){
      margin-top: ${props => props.theme.paddingTablet};
    }
  `}
  ${mq.mobile`
    width: 100%;
    &:not(:first-child){
      margin-top: ${props => props.theme.paddingMobile};
    }
  `}
`;

const Disclaimer = styled.p`
  font-size: ${props => props.theme.disclaimerDesktop};
`;

class CurriculumInformation extends Component {
  render() {
    return (
      <Container>
        <InfoColumn>
          <Tout title={"What's Included"}>
            <p>
              After enjoying a delicious breakfast (prepared by our in-house
              chef), seize the day and embark on your web development journey.
            </p>
            <p>
              Each class is broken down into small, digestible modules and
              plenty of practical exercises. Our mentors will be with you every
              step of the way –{' '}
              <span className="bold">we’re committed to your success!</span>
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout title={"What you'll need..."}>
            <p>
              Saraswati Retreats will provide you learning materials and support
              during the course of our programming. We have several references
              and online tools to help navigate you through each step of your
              education.
            </p>
            <p>
              <span className="bold">
                Each participant is required to bring their own personal laptop.
              </span>
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout>
            <H2>Early Bird Price – $2999 USD</H2>
            <p>
              Enjoy discounted pricing and secure your spot by registering early
              for our upcoming retreats! See retreat dates for our Early Bird
              cut-offs.
            </p>
            <br />
            <H2>Regular Price - $3499 USD</H2>
            <p>
              We accept only 12 students for each retreat to ensure you’re
              provided quality training.<br />
              <span className="bold">Reserve your spot today!</span>
            </p>
            <Disclaimer>*Rates are based on 2-person occupancy.</Disclaimer>
          </Tout>
        </InfoColumn>
      </Container>
    );
  }
}

CurriculumInformation.defaultProps = {};

CurriculumInformation.propTypes = {};

export default CurriculumInformation;
