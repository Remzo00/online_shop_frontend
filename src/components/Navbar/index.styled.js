import styled from "styled-components";

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
