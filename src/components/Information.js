import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import mq from 'utils/mq';
import Tout from './Tout';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mq.desktop`
    flex-direction: row;
    padding: ${props => props.theme.paddingDesktop};
  `}
  ${mq.tablet`
    padding: ${props => props.theme.paddingTablet};
  `}
  ${mq.mobile`
    flex-direction: column;
    padding: ${props => props.theme.paddingMobile};
  `}
`;

const InfoColumn = styled.div`
  ${mq.desktop`
    width: calc(100%/3 - 35px);
  `}
  ${mq.tablet`
    width: calc(50% - 25px);
    &:first-child{
      width: 100%;
    }
    &:not(:first-child){
      margin-top: ${props => props.theme.paddingTablet};
    }
  `}
  ${mq.mobile`
    width: 100%;
    &:not(:first-child){
      margin-top: ${props => props.theme.paddingMobile};
    }
  `}
`;

class Information extends Component {
	render() {
		const { image, retreats } = this.props;

		return (
			<Container>
				{retreats.map((column, i) => (
					<InfoColumn key={`${i}-column`}>
						{column.map((item, ctas, n) => (
							<Tout
								key={`${n}-paragraph`}
								image={image}
								title={item.title}
								description={item.description}
								ctas={ctas}
							/>
						))}
					</InfoColumn>
				))}
			</Container>
		);
	}
}

Information.defaultProps = {
	retreats: [],
};

Information.propTypes = {
	retreats: PropTypes.array,
};

export default Information;
