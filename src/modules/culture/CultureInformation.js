import React, { Component } from 'react';
import styled from 'styled-components';
import Tout from 'components/Tout';
import mq from '../../utils/mq';
import colImage1 from 'media/monkeys-4.jpg';
import colImage2 from 'media/cooking-6.jpg';
import colImage3 from 'media/lotus-1.jpg';

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

const Image1 = {
  src: colImage1,
  alt: 'Image of a Monkey',
};

const Image2 = {
  src: colImage2,
  alt: 'Image of a Traditional Balinese Cooking Class',
};

const Image3 = {
  src: colImage3,
  alt: 'Image of a Lotus Flower',
};

class CulturalInformation extends Component {
  render() {
    return (
      <Container>
        <InfoColumn>
          <Tout image={Image1} title={'Day Trips to Ubud'}>
            <p>
              Ubud Village is a center for traditional crafts and dance. The
              surrounding rainforest, terraced rice paddies and Hindu Temples
              are among Bali’s most breathtaking landscapes.
            </p>
            <p>
              <span className="bold">Your retreat fee includes:</span> River
              Rafting down the Ayung River, a Purifying Ceremony at Tirtha Empul
              Temple, Artisan Village tours, and the famous Monkey Forest.
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image2} title={'Authentic Balinese Cooking Class'}>
            <p>
              <span className="bold">
                Most tourists never experience Traditional Balinese food.
              </span>{' '}
              Rich and lively, cultural dishes are usually reserved for Temple
              Ceremonies and the privacy of Balinese family compounds.
            </p>
            <p>
              At Tresna Bali Cooking School, you’ll enjoy a "hands-on" culinary
              discovery of real Balinese cuisine. Best of all, you’ll pick your
              very own organic ingredients to cook a feast, comprising of 9
              dishes and several spicy sambals created from recipes that have
              been passed down through generations.
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image3} title={'Mind, Body & Spirit'}>
            <p>
              <span className="bold">
                We believe balance is the key to your success.
              </span>{' '}
              After stretching your brain with our intense classes, stretch your
              body, unwind and relax each afternoon with complimentary yoga
              classes offered in our private in-villa studio.
            </p>
            <p>
              <a
                href="http://www.villamalaathina.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Villa Malaathina
              </a>
              , your home for the duration of our retreat, is also equipped with
              luxurious amenities, including air-conditioned gym facilities and
              a 25-meter pool, making it the perfect haven for rest and
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
