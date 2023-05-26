import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  position: relative;
  line-height: 1.3;
  background-color: #dbe4ed;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: #dbe4ed;

  & nav {
    margin-left: auto;
  }
`;

export const NaviLink = styled(NavLink)`
  padding: 2px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;

  &.active {
    color: white;
    background-color: tomato;
  }

  /* &:global(.active) { } */
`;
