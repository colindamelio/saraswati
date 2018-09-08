import React, { Fragment } from 'react';
import Navigation from 'components/Navigation';
import LandingModule from 'components/LandingModule';
import Experience from 'components/Experience';
import Split from 'components/modules/Split';
import Touts from 'components/modules/Touts';
import Application from 'components/Application';
import villaImage from 'media/villa-malaathina-1.jpg';
import studentsImage from 'media/students.jpg';

const Home = props => {
  /// This is placeholder content being used while our resources/data files are sorted out
  const overviewContent = [
    {
      title: 'Front-End Fundamentals',
      description:
        "With 10 days of in-class training, our goal is to ensure you have a strong foundation. Using HTML, CSS, and JAVASCRIPT, you will build your own website from scratch!\n No prior experience is required - just a desire to learn! It may be challenging, but we're excited to guide you through a comprehensive curriculum.",
      ctas: [],
    },
  ];

  const accommodationsContent = [
    {
      title: 'Your Accommodations',
      description:
        'Located in the charming village of Umalas, near Seminyak, Villa Malaathina - set among 5,000 square metres of immaculate tropical gardens and surrounded by traditional Balinese rice paddies - is home for the duration of our retreat. For more information, visit the Villa Malaanthina Official Site.',
      ctas: [],
    },
  ];

  const infoContent = [
    [
      {
        title: 'Upcoming Retreats',
        description: 'Description for column 1',
        ctas: [{ title: 'Apply today' }],
      },
    ],
    [
      {
        title: 'Included',
        description: 'Description for column 2',
      },
    ],

    [
      {
        title: 'Early Bird',
        description: 'Description',
      },
      {
        title: 'Regular',
        description: 'Description',
      },
    ],
  ];

  return (
    <Fragment>
      <Navigation />
      <LandingModule />
      <Split
        id="overview"
        src={studentsImage}
        content={overviewContent}
        isReversed
      />
      <Experience />
      <Split
        id="accommodations"
        src={villaImage}
        content={accommodationsContent}
        secondary
      />
      <Touts id="retreatInformation" content={infoContent} />
      <Application />
    </Fragment>
  );
};

export default Home;
