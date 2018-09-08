import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import Tout from './Tout';
import Image from './Image';
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

const ImageContainer = styled.div`
	width: 100%;
	${mq.desktop`
    width: 50%;
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

const Overview = ({ title, description, ctas }) => {
	return (
		<Container>
			<ImageContainer>
				<Image src={studentsImage} />
			</ImageContainer>
			<Content>
				<Tout title={title} description={description} ctas={ctas} />
			</Content>
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
