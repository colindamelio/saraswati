import React from 'react';
import styled from 'styled-components';
import mq from 'utils/mq';
import Tout from '.././Tout';

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

const Conditions = styled.p`
  font-size: 12px;
  color: ${props => props.theme.black};
`;

const ListItem = styled.li`
  font-family: ${props => props.theme.secondaryFont};
  font-weight: normal;
  font-size: 16px;
  color: ${props => props.theme.black};
  line-height: 33px;
`;

const Touts = (image, ctas) => {
  const retreatInformation = [
    [
      {
        title: 'Upcoming Retreats',
        description: 'Description for column 1',
      },
    ],
    [
      {
        title: 'Included',
        description: 'Description for column 2',
      },
    ],

    [
      {
        title: 'Early Bird',
        description: 'Description',
      },
      {
        title: 'Regular',
        description: 'Description',
      },
    ],
  ];

  return (
    <Container>
      {retreatInformation.map((column, i, ListItem, Conditions) => (
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
};

export default Touts;
