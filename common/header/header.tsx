import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <SearchWrapper>
          <SearchInput type="search" placeholder="Search" />
          <StyledIcon><FontAwesomeIcon icon={faSearch} /></StyledIcon>
        </SearchWrapper>
        <Title>TACTABLE BLOG</Title>
        <List>
          <ListItem><FontAwesomeIcon icon={faTwitter} /></ListItem>
          <ListItem><FontAwesomeIcon icon={faFacebook} /></ListItem>
          <ListItem><FontAwesomeIcon icon={faInstagram} /></ListItem>
        </List>

      </HeaderWrapper>
    </div>
  )
}

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  width: 14px;
  list-style-type: none;
  margin-right: 20px;
  color: #0E3B5A;
  cursor: pointer;
  transition: transform .2s;
  &:hover {
    transform: scale(1.2);
  }
`;

const SearchInput = styled.input`
  border: 1px solid #d6d6d6;
  border-radius: 25px;
  height: 38px;
  min-width: 250px;
  padding: 15px;
  padding-left: 35px;
  outline: none;
  font-family: inherit;
  color: #696765;
  font-size: 14px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #696765;
  }
  :-ms-input-placeholder {
    color: #696765;
  }
`;

const StyledIcon = styled.div`
  width: 14px;
  position: absolute;
  margin-top: 4px;
  margin-left: 10px;
  color: #d6d6d6;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  border-bottom: 1px solid #d6d6d6;
`;

const Title = styled.h2`
  font-weight: 400;
`;

export default Header;