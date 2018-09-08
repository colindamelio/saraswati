import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from './SplitHero';
import H1 from './H1';
import BodyTextLockup from './BodyTextLockup';
import mainImage from 'media/bali-landscape-1.jpg';

// mainImage should be managed in JSON

const Container = styled.div`
	display: flex;
	height: 100vh;
	background: ${props => props.theme.primaryAccent};
`;

const LandingModule = ({ src, title, description }) => {
	return (
		<Container>
			<SplitHero src={mainImage}>
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
