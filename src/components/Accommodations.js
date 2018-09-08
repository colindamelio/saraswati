import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from "./SplitHero";
import Tout from './Tout';
import mq from '../utils/mq';

const Container = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 300px;
	${mq.desktop`
    flex-direction: row;
  `};
`;

const Accommodations = ({ image, title, description, secondary }) => {
	return (
		<Container>
			<SplitHero image={image} title={title} description={description} secondary/>
		</Container>
	);
};

Accommodations.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	cta: PropTypes.array,
};

export default Accommodations;
