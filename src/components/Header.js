import React from 'react';
import styled from 'styled-components';
import { FaMusic, FaPodcast, FaMicrophoneAlt, FaBroadcastTower } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import logo from '../assets/logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1e1e1e;
  color: #fff;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  img {
      height: 24px;
      margin-right: 0.5rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  svg {
    margin-right: 0.3rem;
  }

  &:hover {
    background-color: #333;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #333;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  margin-left: 1rem;

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    padding: 0.5rem;
    width: 200px;
  }

  svg {
    margin-left: 0.5rem;
    cursor: pointer;
    color: #aaa;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo href="/">
        <img src={logo} alt="logo" />
        DreamMusic
      </Logo>
      <Nav>
        <NavItem>
          <FaMusic /> Music
        </NavItem>
        <NavItem>
          <FaPodcast /> Podcast
        </NavItem>
        <NavItem>
          <FaMicrophoneAlt /> Live
        </NavItem>
        <NavItem>
          <FaBroadcastTower /> Radio
        </NavItem>
        <SearchBar>
          <input type="text" placeholder="Michael Jackson" />
          <FiSearch />
        </SearchBar>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
