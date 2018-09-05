import React from 'react';
import styled from 'styled-components';
import mq from 'utils/mq';
import Image from 'components/Image';
import BodyTextLockup from './BodyTextLockup';
import Button from './Button';
import colImage1 from 'media/bali-2-min.jpg';
import colImage2 from 'media/bali-6-min.jpg';
import colImage3 from 'media/bali-7-min.jpg';

const Container = styled.div`
  display: flex;
  padding: 50px;
  ${mq.tablet`
    padding: 50px 15px;
  `} ${mq.mobile`
    flex-direction: column;
    padding: 30px 0;
  `};
`;

const InfoColumn = styled.div`
  flex-grow: 1;
  width: calc(1 / 3 * 100%);
  padding: 0 10px;
  ${mq.mobile`
    width: 100%;
    padding: 0 25px 30px;
  `};
`;

const Conditions = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.black};
`;

// const ListItem = styled.li`
//   font-family: ${props => props.theme.fonts.secondaryFont};
//   font-weight: normal;
//   font-size: 16px;
//   color: ${props => props.theme.colors.black};
//   line-height: 33px;
// `;

const Information = () => {
  return (
    <Container>
      <InfoColumn>
        <Image src={colImage1} alt="" />
        <BodyTextLockup
          title={"Upcoming Retreats"}
          description={"February 10-23, 2019\n Deposit payments are due October 31, 2018. Complete your registration by December 15, 2018 to be eligible for our Early Bird Pricing!\n A non-refundable $500USD deposit is required to secure your spot on all retreats."}
        />
        <Button>Apply Today</Button>
      </InfoColumn>
      <InfoColumn>
        <Image src={colImage2} alt="" />
        <BodyTextLockup
          title={"What's Included"}
          description={"List of inclusions"}
        />
      </InfoColumn>
      <InfoColumn>
        <Image src={colImage3} alt="" />
        <BodyTextLockup
          title={"Early Bird Price – $2999USD"}
          description={"Save big when you register early for upcoming retreats! See retreat dates for Early Bird cut-off."}
        />

        <BodyTextLockup
          title={"Regular Price – $3499USD"}
          description={"We accept a limited number of students each retreat to ensure you’re provided quality training. Reserve your spot today!."}
        />
        <Conditions>
          <sup>*</sup>
          Rates are based on 2-person occupancy.
        </Conditions>
      </InfoColumn>
    </Container>
  );
};

export default Information;
