import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import { colours } from '../colours';
import { MobileProps, PageProps } from '../constants';

const Header: React.FC<PageProps> = ({ isMobile, isTablet}) => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenuBarMobile = () => {
    if (showMobileMenu) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <div>
      <MobileNavBar isMobile={isMobile} isTablet={isTablet}>
        <StyledButton onClick={() => toggleMenuBarMobile()} showMenu={showMobileMenu}><FontAwesomeIcon icon={showMobileMenu ? faXmark : faBars} /></StyledButton>
        <MenuBar showMenu={showMobileMenu}>
          <p>This is the mobile menu space!</p>
        </MenuBar>
      </MobileNavBar>
      <HeaderWrapper isTablet={isTablet} isMobile={isMobile}>
        <SearchWrapper isTablet={isTablet} isMobile={isMobile}>
          <SearchInput type="search" placeholder="Search" />
          <StyledIcon><FontAwesomeIcon icon={faSearch} /></StyledIcon>
        </SearchWrapper>
        <Title role="heading">TACTABLE BLOG</Title>
        <List isTablet={isTablet} isMobile={isMobile}>
          <ListItem><FontAwesomeIcon icon={faTwitter} /></ListItem>
          <ListItem><FontAwesomeIcon icon={faFacebook} /></ListItem>
          <ListItem><FontAwesomeIcon icon={faInstagram} /></ListItem>
        </List>
      </HeaderWrapper>
    </div>
  )
}

const MobileNavBar = styled.div<MobileProps>`
  position: absolute;
  padding: 35px 15px;
  ${({isMobile, isTablet}) => !isMobile && !isTablet && `
    display: none;
  `}
`;

const MenuBar = styled.div<MobileProps>`
  height: 0;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  transition: height 1s ease-in-out;
  background: ${colours.primaryBlue};
  p{
    display: none;
  }
  ${({showMenu}) => showMenu && `
    height: 100vh;
    overflow-y: hidden;
    p {
    text-align: center;
    display: block;
    justify-items: center;
    align-items: center;
    margin: 50% auto; 
    color: ${colours.white};   
  }
  `}
`;

const StyledButton = styled.button<MobileProps>`
  border: none;
  background: none;
  cursor: pointer;
  ${({showMenu}: any) => showMenu && `
    color: ${colours.white};
    position: absolute;
    z-index: 2;
  `}
`;

const List = styled.ul<MobileProps>`
  display: flex;
  align-items: center;
  ${({isMobile, isTablet}) => (isMobile || isTablet) && `
    display: none;
  `}
`;

const ListItem = styled.li`
  width: 14px;
  list-style-type: none;
  margin-right: 20px;
  color: ${colours.primaryBlue};
  cursor: pointer;
  transition: transform .2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const SearchInput = styled.input`
  border: 1px solid ${colours.lightGray};
  border-radius: 25px;
  height: 38px;
  min-width: 250px;
  padding: 15px;
  padding-left: 35px;
  outline: none;
  font-family: inherit;
  color: ${colours.steelGray};
  font-size: 14px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colours.steelGray};
  }
  :-ms-input-placeholder {
    color: ${colours.steelGray};
  }
`;

const StyledIcon = styled.div`
  width: 14px;
  position: absolute;
  margin-top: 4px;
  margin-left: 10px;
  color: ${colours.lightGray};
`;

const SearchWrapper = styled.div<MobileProps>`
  display: flex;
  align-items: center;
  ${({isMobile, isTablet}) => (isMobile || isTablet) && `
    display: none;
  `}
`;

const HeaderWrapper = styled.div<MobileProps>`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  border-bottom: 1px solid ${colours.lightGray};
  ${({isMobile, isTablet}) => (isMobile || isTablet) && `
    justify-content: center;
  `}
`;

const Title = styled.h2`
  font-weight: 400;
`;

export default Header;