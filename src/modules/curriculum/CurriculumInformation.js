import React, { Component } from 'react';
import styled from 'styled-components';
import Tout from 'components/Tout';
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

class CurriculumInformation extends Component {
  render() {
    return (
      <Container>
        <InfoColumn>
          <Tout title={'10 days of in-class training'}>
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
          <Tout title={'Front-End Fundamentals'}>
            <p>
              Our curriculum is designed to cover the principles of front-end
              development. Starting with the basics of{' '}
              <span className="bold">HTML</span> &{' '}
              <span className="bold">CSS</span>, we’ll quickly move towards more
              complex concepts like layouts, positioning, navigation menus, and
              more.
            </p>
            <p>
              At the end of the retreat, you’ll have a fully-responsive website
              that you built from scratch!
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout title={"What you'll need"}>
            <p>
              Saraswati Retreats will provide you learning materials and support
              during the course of our programming. We have several references
              and online tools to help navigate you through each step of your
              education.
            </p>
            <p>
              However,{' '}
              <span className="bold">
                each participant is required to bring their own personal laptop.
              </span>
            </p>
          </Tout>
        </InfoColumn>
      </Container>
    );
  }
}

CurriculumInformation.defaultProps = {};

CurriculumInformation.propTypes = {};

export default CurriculumInformation;
