import React, { Component, Fragment } from 'react';
import Navigation from 'components/Navigation';
import Split from 'components/modules/Split';
import Touts from 'components/modules/Touts';
import students from 'media/students.jpg';
import laptop from 'media/laptop.jpg';

export default class Curriculum extends Component {
  render() {
    const sampleContent1 = [
      {
        title: 'Your Learning Envionment',
        description:
          'We are committed to providing an inclusive, safe classroom for all that choose to learn with us.',
      },
    ];

    const sampleContent2 = [
      [
        {
          title: '10 days of in-class training',
          description: 'After enjoying a delicious breakfast...',
        },
      ],
      [
        {
          title: 'Front-End Fundamentals',
          description:
            'Our curriculum is designed to cover the principals of front-end development.',
        },
      ],
      [
        {
          title: "What you'll need...",
          description:
            'Saraswati Retreats will provide you learning materials and support during the course of our programming.',
        },
      ],
    ];

    const sampleContent3 = [
      {
        title: 'Join one of our upcoming retreats!',
        description:
          "We accept a limited number of students each retreat to ensure you're provided quality training. Reserve your spot today!",
        ctas: [
          {
            title: 'Apply Now',
          },
        ],
      },
      {
        description: 'Curious about our curriculum? Click here to learn more.',
      },
    ];

    return (
      <Fragment>
        <Navigation />
        <Split
          id="environment"
          src={students}
          content={sampleContent1}
          secondary
        />
        <Touts id="details" content={sampleContent2} />
        <Split id="join" src={laptop} content={sampleContent3} secondary />
      </Fragment>
    );
  }
}
