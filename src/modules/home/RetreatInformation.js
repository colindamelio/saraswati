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
    border-bottom: 5px solid white;
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

const List = styled.ul`
  padding-left: 0;
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  padding-left: 16px;
  &:first-child {
    margin-top: 16px;
  }
  &:before {
    position: absolute;
    left: 0;
    content: '•';
  }
`;

const Disclaimer = styled.p`
  font-size: ${props => props.theme.disclaimerDesktop};
`;

const Image1 = {
  src: colImage1,
  alt: 'Image of Balinese Landscape',
};

const Image2 = {
  src: colImage2,
  alt: 'Image of Traditional Balinese Cuisine',
};

const Image3 = {
  src: colImage3,
  alt: 'Image of a Monkey',
};

const Inclusions = [
  '10 nights, 11 days Luxury Villa Accommodation',
  'In-class training covering front-end fundamentals (4:1 student-mentor ratio)',
  'All Breakfasts & Lunches',
  '5 Dinners featuring Local Balinese Fare, Beachside BBQ and Farewell Feast',
  'On-site Yoga Classes',
  'Ayung River Rafting through Tropical Rainforest',
  'Purifying Temple Ceremony',
  'Artisan Village Tour in Ubud',
  'Authentic Hands-On Balinese Cooking Class',
];

class RetreatInformation extends Component {
  render() {
    return (
      <Container>
        <InfoColumn>
          <Tout image={Image1} title={'Upcoming Retreats'}>
            <p>
              <span className="bold">October 27 – November 6, 2019</span>
              <br />
              Complete your registration by May 31st, 2019 to be eligible for
              our Early Bird Pricing!
            </p>
            <p>
              A non-refundable $500 USD deposit is required to secure your spot
              on all retreats, and is due upon acceptance into our program.
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image2} title={"What's Included"}>
            <List>
              {Inclusions.map((item, n) => (
                <ListItem key={n}>{item}</ListItem>
              ))}
            </List>
            <Disclaimer>
              <span className="bold">Note:</span> Please bring your own personal
              laptop. Flight costs not included.
            </Disclaimer>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image3}>
            <H2>Early Bird Price – $2399 USD</H2>
            <p>
              Enjoy discounted pricing and secure your spot by registering early
              for our upcoming retreats! See retreat dates for our Early Bird
              cut-offs.
            </p>
            <br />
            <H2>Regular Price - $2799 USD</H2>
            <p>
              To preserve a 4:1 student-mentor ratio, we accept only 12 students
              for each retreat to ensure you’re provided quality training.
              <br />
              <span className="bold">Reserve your spot today!</span>
            </p>
            <Disclaimer>*Rates are based on 2-person occupancy.</Disclaimer>
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
