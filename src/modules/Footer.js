import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import DEFAULT_PROPS from 'data/components/footer';
import Icon from '../components/Icon';
import mq from 'utils/mq';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: ${props => props.theme.footerPaddingDesktop};
  background: ${props => props.theme.black};

  ${mq.tablet`
    padding: ${props => props.theme.footerPaddingTablet};
  `}${mq.mobile`
    flex-direction: column-reverse;
    padding: ${props => props.theme.footerPaddingMobile};

    .routesList {
      order: 1;
    }
  `};
`;

const Column = styled.ul`
  max-width: 225px;
  padding: 20px 0 0;
  margin: 0;
  list-style: none;

  ${mq.mobile`
    padding: 0 0 0 20px;
    max-width: 100%;
  `};

  &.footerLogo svg {
    max-width: 225px;
  }

  li {
    color: ${props => props.theme.white};
    margin: 10px 0;
    font-size: 14px;
  }
`;

const Link = styled(NavLink)`
  height: ${props => props.theme.ctaFontSize};
  font-family: ${props => props.theme.secondaryFont};
  font-size: ${props => props.theme.ctaFontSize};
  font-weight: ${props => props.theme.bold};
  text-transform: ${props => props.theme.ctaCasing};
  color: ${props => props.theme.white};
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme.primaryAccent};
  }
`;

const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  font-family: ${props => props.theme.secondaryFont};
  font-size: ${props => props.theme.ctaFontSize};
  font-weight: ${props => props.theme.bold};
  color: ${props => props.theme.white};

  &:hover {
    color: ${props => props.theme.primaryAccent};
  }
`;

const Footer = ({ routes }) => {
  return (
    <FooterContainer secondary>
      <Column className="footerLogo">
        <li>
          <Icon name={'logo'} color={'#EEEEEE'} />
        </li>
        <li>© 2018 Saraswati Bali Retreats</li>
      </Column>
      <Column className="routesList">
        {routes.map(({ title, to }) => (
          <li key={to}>
            <Link to={to} secondary>
              {title}
            </Link>
          </li>
        ))}
      </Column>
      <Column>
        <li>
          <SocialLink href="https://www.facebook.com/SaraswatiRetreats">
            Facebook
          </SocialLink>
        </li>
        <li>
          <SocialLink href="https://www.instagram.com/saraswati_retreats">
            Instagram
          </SocialLink>
        </li>
        <li>
          <SocialLink>Contact Us</SocialLink>
        </li>
      </Column>
    </FooterContainer>
  );
};

Footer.defaultProps = DEFAULT_PROPS;

export default Footer;
