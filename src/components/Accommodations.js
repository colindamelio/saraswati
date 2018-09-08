import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tout from './Tout';
import Image from './Image';
import villaImage from 'media/villa-malaathina-1.jpg';
import mq from '../utils/mq';

const Container = styled.section`
	display: flex;
	flex-direction: column;
	min-height: 300px;
	${mq.desktop`
    flex-direction: row;
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
	background: ${props => props.theme.primaryAccent};
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

const Accommodations = ({ title, description, ctas }) => {
	return (
		<Container>
			<ImageContainer>
				<Image src={villaImage} />
			</ImageContainer>
			<Content>
				<Tout secondary title={title} description={description} ctas={ctas} />
			</Content>
		</Container>
	);
};

Accommodations.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	cta: PropTypes.array,
};

export default Accommodations;
