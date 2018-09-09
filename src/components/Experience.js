import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from 'utils/mq';
import Hero from './Hero';
import H1 from './H1';
import Tout from './Tout';
import experienceImage from 'media/temple-courtyard.jpg';

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
  `};
	${mq.mobile`
    padding: ${props => props.theme.paddingMobile};
  `};
`;

const Experience = ({ title, description, ctas }) => {
	return (
		<Hero src={experienceImage}>
			<Column>
				<H1 secondary>{title}</H1>
			</Column>
			<Column>
				<Tout secondary description={description} ctas={ctas} />
			</Column>
		</Hero>
	);
};

Experience.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	cta: PropTypes.array,
};

export default Experience;
