// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import {
  FaHome,
  FaChartLine,
  FaMusic,
  FaCompass,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

const SidebarContainer = styled.aside`
  width: 250px;
  height: 100vh;
  background-color: #1e1e1e;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
`;

const MenuHeading = styled.h3`
  color: #aaa;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #aaa;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  svg {
    margin-right: 0.8rem;
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #333;
    color: #fff;
  }

  &.active {
    background-color: #c01111;
    color: #fff;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <MenuHeading>MENU</MenuHeading>
      <ul>
        <MenuItem className="active">
          <FaHome /> Home
        </MenuItem>
        <MenuItem>
          <FaChartLine /> Trends
        </MenuItem>
        <MenuItem>
          <FaMusic /> Library
        </MenuItem>
        <MenuItem>
          <FaCompass /> Discover
        </MenuItem>
      </ul>
      <MenuHeading>GENERAL</MenuHeading>
      <ul>
        <MenuItem>
          <FaCog /> Settings
        </MenuItem>
        <MenuItem>
          <FaSignOutAlt /> Log Out
        </MenuItem>
      </ul>
    </SidebarContainer>
  );
};

export default Sidebar;