import React, { Component } from 'react';
import styled from 'styled-components';
import Tout from 'components/Tout';
import mq from '../../utils/mq';
import colImage1 from 'media/monkeys-4.jpg';
import colImage2 from 'media/cooking-6.jpg';
import colImage3 from 'media/yoga.jpg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mq.desktop`
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

class CulturalInformation extends Component {
  render() {
    return (
      <Container>
        <InfoColumn>
          <Tout image={Image1} title={'Day trips to Ubud'}>
            <p>
              Known as a center for traditional crafts and dance, the
              surrounding rainforest and terraced rice paddies, dotted with
              Hindu temples and shrines, are among Bali’s most breathtaking
              landscapes.
            </p>
            <p>
              <span className="bold">Your retreat fee includes:</span> River
              Rafting down the Ayung River, a Purifying Ceremony at Tirtha Empul
              Temple, Artisan Village tours, and the famous Monkey Forest.
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image2} title={'Traditional Balinese Cooking'}>
            <p>
              <span className="bold">
                Enjoy a 5-hour traditional Balinese cooking class at Tresna Bali
                Cooking School.
              </span>
            </p>
            <p>
              This hands-on experience starts by picking spices from an organic
              garden located on-site.
            </p>
            <p>
              Your meal includes at least 1 salad, 3 mains, 1 dessert, and
              several spicy sambals, created from recipes that have been passed
              down through generations.
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image3} title={'Mind, Body & Spirit'}>
            <p>
              We believe balance is the key to your success.{' '}
              <span className="bold">Complimentary Yoga classes</span> will be
              offered after each lesson so you can unwind and let your mind
              rest.
            </p>
            <p>
              <a href="http://www.villamalaathina.com/" target="_blank">
                Villa Malaathina
              </a>, your home for the duration of our retreat, is also equipped
              with luxurious amenities, including air-conditioned gym facilities
              and a 25-meter pool, making it the perfect location for rest and
              relaxation.
            </p>
          </Tout>
        </InfoColumn>
      </Container>
    );
  }
}

CulturalInformation.defaultProps = {};

CulturalInformation.propTypes = {};

export default CulturalInformation;
