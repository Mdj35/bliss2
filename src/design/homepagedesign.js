import styled from 'styled-components';
import { FaBars, FaDownload } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const ChartContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px;
`;
export const DownloadIcon = styled(FaDownload)`
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
  margin-left: auto;

  &:hover {
    color: black; /* Change color on hover */
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column; /* Change to column to stack items vertically */
  align-items: center;
  padding: 15px;
  background-color: white;
  border-bottom: 2px solid black;
  position: relative; /* Ensures absolute positioning works */
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-weight: bold;
`;

export const SearchBox = styled.input`
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  width: 200px; /* Set a fixed width for the search box */
  transition: width 0.3s ease; /* Add transition for smooth expansion */

  &:focus {
    width: 300px; /* Expand width when focused */
  }
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid black;
  object-fit: cover;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;

export const SidebarText = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: white;
`;

export const NavbarIcon = styled(FaBars)`
  font-size: 24px;
  cursor: pointer;
  color: black;
  position: absolute;
  left: 20px;  /* Moves to upper left */
  top: 35px;
  z-index: 1000; /* Stays on top */
`;

export const HelpText = styled.span`
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const MenuBar = styled.div`
  background-color: #b22222;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  border: 1px solid black;
  padding: 8px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid black;
  padding: 8px;
`;

export const Sidebar = styled.div`
  width: ${props => (props.visible ? '250px' : '0')};
  height: 100vh;
  background-color: #f8f9fa;
  border-right: ${props => (props.visible ? '2px solid black' : 'none')};
  padding: ${props => (props.visible ? '20px' : '0')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden; /* Prevent scrolling */
  transition: width 0.3s ease, padding 0.3s ease, border-right 0.3s ease;
`;

export const Title1 = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  color: #333;
  margin-left: 15px;
`;

export const UserInfo = styled.div`
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;

export const MenuItem = styled.p`
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const RecommendationModal = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 24%;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
`;

export const RecommendationItem = styled.div`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: flex-start; /* Align tabs to the left */
  margin-right: auto; /* Push tabs to the left */
`;

export const TabButton = styled.button`
  background-color: ${props => (props.active ? 'white' : 'white')};
  color: ${props => (props.active ? 'black' : 'black')};
  border: 1px solid black;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:not(:last-child) {
    border-right: none;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;