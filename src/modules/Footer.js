import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import DEFAULT_PROPS from 'data/components/footer';
import Icon from '../components/Icon';
import mq from 'utils/mq';

const Container = styled.section`
  padding: ${props => props.theme.footerPaddingDesktop};
  background: ${props => props.theme.black};

  ${mq.tablet`
    padding: ${props => props.theme.footerPaddingTablet};
  `}${mq.mobile`
    flex-direction: column-reverse;
    padding: ${props => props.theme.footerPaddingMobile};
  `};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${mq.mobile`
    flex-direction: column-reverse;
  `};
`;

const Column = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;

  &.footerLogo svg {
    max-width: 225px;
  }

  li {
    color: ${props => props.theme.white};
    font-size: ${props => props.theme.ctaFontSize};
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  ${mq.mobile`
    margin-bottom: 30px;
    &.shift {
      order: 1;
    }
  `};
`;

const Link = styled(NavLink)`
  height: ${props => props.theme.ctaFontSize};
  font-family: ${props => props.theme.secondaryFont};
  font-size: ${props => props.theme.ctaFontSize};
  font-weight: ${props => props.theme.bold};
  color: ${props => props.theme.white};
  transition: color 0.3s;
  &:hover {
    color: ${props => props.theme.primaryAccent};
  }
`;

const SocialLink = styled.a`
  height: ${props => props.theme.ctaFontSize};
  font-family: ${props => props.theme.secondaryFont};
  font-size: ${props => props.theme.ctaFontSize};
  font-weight: ${props => props.theme.bold};
  color: ${props => props.theme.white};
  transition: color 0.3s;
  &:hover {
    color: ${props => props.theme.primaryAccent};
  }
`;

const Footer = ({ routes }) => {
  return (
    <Container>
      <Content>
        <Column className={'footerLogo'}>
          <li>
            <Icon name={'logo'} color={'#EEEEEE'} />
          </li>
          <li>© 2018 Saraswati Bali Retreats</li>
        </Column>
        <Column className={'shift'}>
          {routes.map(({ title, to }) => (
            <li key={to}>
              <Link to={to}>{title}</Link>
            </li>
          ))}
        </Column>
        <Column>
          <li>
            <SocialLink
              href="https://www.facebook.com/SaraswatiBaliRetreats"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href="https://www.instagram.com/saraswatibaliretreats"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </SocialLink>
          </li>
          <li>
            <SocialLink href="mailto:hello@saraswatibali.com">
              Contact Us
            </SocialLink>
          </li>
        </Column>
      </Content>
    </Container>
  );
};

Footer.defaultProps = DEFAULT_PROPS;

export default Footer;
