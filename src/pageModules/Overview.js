import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SplitHero from "components/SplitHero";
import Tout from 'components/Tout';
import Image from 'components/Image';
import studentsImage from 'media/students.jpg';
import mq from '../utils/mq';

const Container = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 300px;
	${mq.desktop`
    flex-direction: row-reverse;
  `};
`;

const Content = styled.div`
	width: 100%;
	height: auto;
	padding: ${props => props.theme.paddingDesktop};
	${mq.desktop`
    width: 50%;
  `};
	${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `};
	${mq.mobile`
    padding: ${props => props.theme.paddingMobile};
  `};
`;

const Overview = ({ image, title, description, ctas, isReversed }) => {
	return (
		<Container>
			<SplitHero image={image} title={title} description={description} ctas={ctas} isReversed />
		</Container>
	);
};

Overview.defaultProps = {
	ctas: [],
};

Overview.propTypes = {
	cta: PropTypes.array,
	title: PropTypes.string,
	description: PropTypes.string,
};

export default Overview;
