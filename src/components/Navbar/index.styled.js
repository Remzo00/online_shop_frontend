import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #ddd;
  }
`;

export const LogoutButton = styled.button`
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    color: #ddd;
  }
`;
