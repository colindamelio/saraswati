import React from 'react';
import styled from 'styled-components';
import mq from 'utils/mq';
import Image from 'components/Image';
import Tout from './Tout';
import Button from './Button';
import colImage1 from 'media/bali-landscape-2.jpg';
import colImage2 from 'media/cooking-2.jpg';
import colImage3 from 'media/monkeys-1.jpg';

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

// const ListItem = styled.li`
//   font-family: ${props => props.theme.secondaryFont};
//   font-weight: normal;
//   font-size: 16px;
//   color: ${props => props.theme.black};
//   line-height: 33px;
// `;

const Information = (image) => {
  return (
    <Container>
      <InfoColumn>
        <Tout
          image={image}
          title={"Upcoming Retreats"}
          description={"February 10-23, 2019\n Deposit payments are due October 31, 2018. Complete your registration by December 15, 2018 to be eligible for our Early Bird Pricing!\n A non-refundable $500USD deposit is required to secure your spot on all retreats."}
        />
        <Button>Apply Today</Button>
      </InfoColumn>
      <InfoColumn>
        <Tout
          image={image}
          title={"What's Included"}
          description={"List of inclusions"}
        />
      </InfoColumn>
      <InfoColumn>
        <Tout
          image={image}
          title={"Early Bird Price – $2999USD"}
          description={"Save big when you register early for upcoming retreats! See retreat dates for Early Bird cut-off."}
        />
        <Tout
          title={"Regular Price – $3499USD"}
          description={"We accept a limited number of students each retreat to ensure you’re provided quality training. Reserve your spot today!."}
        />
        <Conditions>
          <sup>*</sup> Rates are based on 2-person occupancy.
        </Conditions>
      </InfoColumn>
    </Container>
  );
};

export default Information;
