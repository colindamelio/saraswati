import React, { Component } from 'react';
import styled from 'styled-components';
import Tout from 'components/Tout';
import mq from '../../utils/mq';
import frances from 'media/frances.jpg';
import john from 'media/john.jpg';
import jesse from 'media/jesse.jpg';

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
  src: frances,
  alt: 'Image of a Monkey',
};

const Image2 = {
  src: john,
  alt: 'Portrait of Johnathan Fong',
};

const Image3 = {
  src: jesse,
  alt: 'Portrait of Jesse Noseworthy',
};

class CulturalInformation extends Component {
  render() {
    return (
      <Container>
        <InfoColumn>
          <Tout image={Image1} title={'Frances Tse Ardika'}>
            <p>
              <span className="bold">
                Meet Frances, our Resident Cultural Liaison & Retreat Organizer!
              </span>
            </p>
            <p>
              Originally from Toronto, Canada, Frances is an innovative
              marketing and sales entrepreneur with global experience in
              Toronto, Hong Kong, San Francisco, Tokyo and Bali.
            </p>
            <p>
              Having lived in Bali for over 17 years, she has committed herself
              to cultural immersion and preservation of Balinese traditions.
              Together with her husband, Adi (and their daughter, Santi),
              Frances welcomes family, friends and tourists from all over the
              world to discover local, <span className="italic">authentic</span>{' '}
              Balinese experiences.
            </p>
            <p>
              The Ardika Family also own and operate{' '}
              <a
                href="https://tresnabali.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tresna Bali Cooking School
              </a>
              , ranked by Trip Advisor users as one of the 10 Best Food & Drink
              tours in Bali.
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image2} title={'Johnathan Fong'}>
            <p>
              <span className="bold">
                Meet Johnathan, our Curriculum Director!
              </span>
            </p>
            <p>
              With a degree in Graphic Design, Johnathan spent years freelancing
              before becoming a professional Web Developer. “I was losing a lot
              of small-business projects because I didn’t know how to code. It
              felt too foreign.”
            </p>
            <p>
              In 2016, Johnathan invested in himself, completed bootcamp
              training, and started working for a Digital Agency in Toronto,
              Canada. He also teaches intro to front-end development part-time,
              and enjoys seeing his students succeed. “Even if you don’t change
              professions, learning the fundamentals is invaluable. Our world is
              becoming digital, and businesses look for these skills.”
            </p>
            <p>
              <span className="bold">Have questions about our curriculum?</span>{' '}
              Feel free to{' '}
              <a
                href="mailto:johnathan@saraswatibali.com?Subject=Curriculum%20Inquiry"
                target="_top"
                rel="noopener noreferrer"
              >
                send Johnathan an email
              </a>{' '}
              .
            </p>
          </Tout>
        </InfoColumn>
        <InfoColumn>
          <Tout image={Image3} title={'Jesse Noseworthy'}>
            <p>
              Starting his professional journey in journalism, Jesse decided to
              shift gears in 2017. He completed a Front-End Web Development
              bootcamp in Toronto, Canada, and became a Front-End Web Developer
              full-time.
            </p>
            <p>
              "As a Front-End Web Developer, I'm very motivated by how large of
              an impact technology plays in peoples lives. And one of my goals
              in life is to create unforgettable experiences for those users."
            </p>
            <p>
              Currently a Senior Web Engineer at{' '}
              <a
                href="https://www.shopify.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shopify
              </a>
              , Jesse joins the Saraswati team as one of our mentors and
              Assistant Curriculum Coordinator. Learn more about Jesse and his
              work by visiting his{' '}
              <a
                href="http://jessenoseworthy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                portfolio website
              </a>
              .
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
