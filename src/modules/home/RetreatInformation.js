import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from 'components/H2';
import Tout from 'components/Tout';
import mq from '../../utils/mq';
import colImage1 from 'media/bali-landscape-2.jpg';
import colImage2 from 'media/cooking-3.jpg';
import colImage3 from 'media/monkeys-3.jpg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mq.desktop`
    flex-direction: row;
    padding: ${props => props.theme.paddingDesktop};
    border-bottom: 5px solid ${props => props.theme.primaryAccent};
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

const Image1 = {
  src: colImage1,
  alt: 'alt text',
};

const Image2 = {
  src: colImage2,
  alt: 'alt text',
};

const Image3 = {
  src: colImage3,
  alt: 'alt text',
};

const ListItem = styled.li`
  &:first-child {
    margin-top: 16px;
  }
`;

const Inclusions = [
  'Airport transfer',
  '13 nights accommodation',
  '10 days of in-class training',
  'All breakfasts & lunches included',
  '4 group dinners',
  'Cultural excursions and activities',
  '1 traditional balinese cooking class',
];

class RetreatInformation extends Component {
  render() {
    return (
      <Container>
        <InfoColumn>
          <Tout image={Image1} title={'Upcoming Retreats'}>
            <p>
              <span className="bold">February 10 – 23, 2019</span>
              <br />Deposit payments are due October 31, 2018. Complete your
              registration by December 15, 2018 to be eligible for our Early
              Bird Pricing!
            </p>
            <p>
              A non-refundable $500USD deposit is required to secure your spot
              on all retreats.
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image2} title={"What's Included"}>
            {Inclusions.map((item, n) => <ListItem key={n}>{item}</ListItem>)}
            <p>
              <span className="bold">Note:</span> Please be sure to bring your
              own personal laptop. Flight costs not included.
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image3}>
            <H2>Early Bird Price – $2999USD</H2>
            <p>
              Save big when you register early for upcoming retreats! See
              retreat dates for Early Bird cut-off.
            </p>
            <br />
            <H2>Regular Price - $3499USD</H2>
            <p>
              We accept a limited number of students each retreat to ensure
              you’re provided quality training. <br />
              <span className="bold">Reserve your spot today!</span>
            </p>
            <p>*Rates are based on 2-person occupancy.</p>
          </Tout>
        </InfoColumn>
      </Container>
    );
  }
}

RetreatInformation.defaultProps = {
  retreats: [],
};

RetreatInformation.propTypes = {
  retreats: PropTypes.array,
};

export default RetreatInformation;
