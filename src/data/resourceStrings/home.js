import React, { Fragment } from 'react';

const strings = {
  'button/apply': 'Apply Today',
  'button/courseOverview': 'Course Overview',
  'home/landingModule/title': () => {
    return (
      <Fragment>
        At Saraswati Retreats, we believe your education should be{' '}
        <span className="semibold">extraordinary.</span>
      </Fragment>
    );
  },
  'home/landingModule/description': Link => {
    return (
      <Fragment>
        Learn to code your own website in the heart of Bali. <Link>Apply</Link>{' '}
        for our 11-day retreat today!
      </Fragment>
    );
  },
  'home/overview/title': 'Front-End Fundamentals',
  'home/overview/description':
    "With 10 days of in-class training, our goal is to ensure you have a strong foundation. Using HTML, CSS, and JAVASCRIPT, you will build your own website from scratch! No prior experience is required - just a desire to learn! It may be challenging, but we're excited to guide you through a comprehensive curriculum.",
  'home/experience/title': 'Providing you authentic Balinese experiences.',
  'home/experience/description':
    'Without a doubt, Bali is beautiful. However, most people who visit the island miss an opportunity to discover authentic Balinese Culture. Saraswati Retreats strives to educate our guests beyond coding their website - experience local cuisine, traverse the landscape, and embrace what it means to be truly Balinese.',
  'home/accommodations/title': 'Your Accommodations',
  'home/accommodations/description':
    'Located in the charming village of Umalas, near Seminyak, Villa Malaathina - set among 5,000 square metres of immaculate tropical gardens and surrounded by traditional Balinese rice paddies - is home for the duration of our retreat. For more information, visit the Villa Malaanthina Official Site.',
  'home/retreats/title': 'Upcoming Retreats',
  'home/retreats/description':
    'February 10-23, 2019 Register by December 15, 2018 to be eligible for our Early Bird Pricing! A non-refundable $500USD deposit is required to secure your spot on all retreats.',
  'home/included/title': "What's Included",
  'home/included/list': [
    '13 nights accomodation',
    '10 days of in-class training',
    'Breakfast & lunch (weekdays)',
    '5 scheduled dinners',
    '1 traditional Balinese cooking class (5 hours)',
    'Morning meditation & yoga',
  ],
  'home/included/description':
    'Note: Please be sure to bring your own personal laptop. Flight costs not included. Airport transfer can be arranged for an additional fee.',
  'home/early/title': 'Early Bird Price - $2999USD',
  'home/early/description':
    'Save big when you register early for upcoming retreats! See retreat dates for Early Bird cut-off.',
  'home/regular/title': 'Regular Price - $3499USD',
  'home/regular/description':
    "We accept a limited number of students each retreat to ensure you're provided with quality training. Reserve your spot today! *Rates are based on 2-person occupancy.",
  'home/form/title': 'Apply today for an upcoming retreat!',
};

export default strings;
