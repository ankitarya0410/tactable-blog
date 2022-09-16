import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import { colours } from '../colours';

const Footer = () => {
  return (
    <FooterWrapper>
      <List>
        <ListItem><FontAwesomeIcon icon={faTwitter} /></ListItem>
        <ListItem><FontAwesomeIcon icon={faLinkedin} /></ListItem>
        <ListItem><FontAwesomeIcon icon={faInstagram} /></ListItem>
        <ListItem><FontAwesomeIcon icon={faFacebook} /></ListItem>
      </List>
      <Copyright>Copyright &#169;2022 All rights reserved. This project is for assessment purposes only </Copyright>
      <List>
        <LinkList><Link href="/"><StyledLink>Terms &amp; Conditions</StyledLink></Link></LinkList>
        <LinkList><Link href="/"><StyledLink>Privacy Policy</StyledLink></Link></LinkList>
        <LinkList><Link href="/"><StyledLink>Contact Us</StyledLink></Link></LinkList>
      </List>
    </FooterWrapper>
  )
}

const List = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  padding-left: 0;
`;

const ListItem = styled.li`
  width: 14px;
  list-style-type: none;
  margin-right: 5px;
  background: ${colours.steelGray};
  color: ${colours.white};
  padding: 12px 13px;
  border-radius: 25px;  
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: ${colours.white};
    color: ${colours.primaryBlue};
  }
`;

const FooterWrapper = styled.div`
  min-height: 100px;
  background: ${colours.primaryBlue};
  color: ${colours.white};
  text-align: center;
  width: 100%;
  padding: 50px 0;
`;

const Copyright = styled.div`
  margin: 20px 0;
  font-weight: 400;
`;

const LinkList = styled.li`
  list-style-type: none;
  margin-right: 20px;
  &::after {
    content: "|";
    margin-left: 20px;
  }  
  &:last-child {
    &::after {
      content: " ";
      margin-left: 0;
    }
  }
`;

const StyledLink = styled.a`
  color: ${colours.white};
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;