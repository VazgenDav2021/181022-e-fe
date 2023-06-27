import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarElement = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 36px 48px;
  border-bottom: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  max-width: 800px;
  display: flex;
`;

// здесь мы использовали другой компонент, чотбы доавить ему стили
export const NavigationLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  padding: 20px;
  font-weight: bold;
  font-size: 18px;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 36px;
`;
