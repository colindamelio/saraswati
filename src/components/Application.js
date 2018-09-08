import React, { Fragment } from 'react';
import SplitHero from './SplitHero';
import H1 from './H1';
import ApplicationForm from './ApplicationForm';
import reflection from 'media/temple-sunset.jpg';

const Application = ({ title }) => {
	return (
		<Fragment>
			<SplitHero src={reflection}>
				<H1>{title}</H1>
				<ApplicationForm />
			</SplitHero>
		</Fragment>
	);
};

export default Application;
