import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from 'components/SplitHero';
import H1 from 'components/H1';
import BodyTextLockup from 'components/BodyTextLockup';
import mainImage from 'media/bali-landscape-1.jpg';

// mainImage should be managed in JSON

const Container = styled.section`
	display: flex;
	height: 100vh;
`;

const LandingModule = ({ image, title, description }) => {
	return (
		<Container>
			<SplitHero image={image}>
				<H1 dangerouslySetInnerHTML={{ __html: title }} />
				<BodyTextLockup description={description} />
			</SplitHero>
		</Container>
	);
};

LandingModule.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};

export default LandingModule;
