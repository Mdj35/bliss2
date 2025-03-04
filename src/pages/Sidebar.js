import React from 'react';
import { Sidebar, Navbar, Title1, NavbarIcon, UserInfo, MenuItem } from '../design/homepagedesign';
import Logout from './logout';

const SidebarComponent = ({ isDashboardVisible, toggleDashboard, userName, userPosition, handleFilterModalOpen, handleAddMaterialsClick, handleChartsClick, handleHomeClick }) => {
  return (
    <Sidebar visible={isDashboardVisible}>
      <div>
        <Navbar>
          <Title1 visible={isDashboardVisible}>DASHBOARD</Title1>
          <NavbarIcon onClick={toggleDashboard} />
        </Navbar>
        {isDashboardVisible && (
          <>
            <UserInfo>🔵 {userName} - {userPosition}</UserInfo>
            <MenuItem onClick={handleHomeClick}>HOME</MenuItem>
            <MenuItem onClick={handleFilterModalOpen}>FILTER BY:</MenuItem>
            <MenuItem onClick={handleAddMaterialsClick}>ADD MATERIALS</MenuItem>
            <MenuItem onClick={handleChartsClick}>GRAPHS</MenuItem>
          </>
        )}
      </div>
      <Logout />
    </Sidebar>
  );
};

export default SidebarComponent;