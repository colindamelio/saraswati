import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from 'utils/mq';
import Touts from 'components/Touts';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Tout from 'components/Tout';
import HeroImage from '../../media/wood-texture-1.jpg';

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mq.desktop`
    width: 50%;
    padding: ${props => props.theme.paddingDesktop};
  `};
  ${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `} ${mq.mobile`
    padding: ${props => props.theme.paddingMobile};
  `};
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

const List = styled.ul`
  padding-left: 0;
`;

const Topics = [
  'Layout, Images & Typography',
  'Links, Menus & Site Navigation',
  'Contact Forms',
  'Responsive Design (support your website on all browsers and devices!)',
  'Introductory to JavaScript and jQuery for enhanced site interaction',
  'Domain registration, hosting, and getting your website online!',
];

// const ctas = [
//   {
//     text: 'Get In Touch',
//     href: '/apply',
//     variant: 'secondary',
//     hasRoute: true,
//   },
//   {
//     text: 'See Sample Itinerary',
//     href: '/culture',
//     variant: 'secondary',
//     hasRoute: true,
//   },
// ];

const CourseStructure = ({ left }) => {
  return (
    <Touts image={HeroImage} columns={2}>
      <Column left>
        <Tout secondary>
          <H1 secondary>10 days of training</H1>
          <p>
            After enjoying a delicious breakfast (prepared by our in-house
            chef), seize the day and embark on your web development journey.
          </p>
          <p>
            Each class is broken down into small, digestible modules and plenty
            of practical exercises. Our mentors will be with you every step of
            the way –{' '}
            <span className="bold">we’re committed to your success!</span>
          </p>
        </Tout>
      </Column>
      <Column>
        <Tout secondary>
          <H1 secondary>What you'll learn</H1>
          <p>
            Our curriculum is designed to cover the principles of front-end
            development. Starting with the basics of{' '}
            <span className="bold">HTML</span> &{' '}
            <span className="bold">CSS</span>, the foundation of your website,
            we'll guide you through the following concepts:
          </p>
          <List>
            {Topics.map((item, n) => <ListItem key={n}>{item}</ListItem>)}
          </List>
          <p>
            At the end of the retreat, you’ll have a fully-responsive website
            that you built from scratch, and the confidence to speak with a
            development team!
          </p>
        </Tout>
      </Column>
    </Touts>
  );
};

CourseStructure.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.array,
};

export default CourseStructure;
