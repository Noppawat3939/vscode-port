import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  border: ${({ theme }) => theme.border.nav};
  padding: 2px 3px;
`;

export const Link = styled(NavLink)`
  width: auto;
  padding: 8px 25px;
  font-size: 13px;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.fontColor.body};
  background: ${({ theme }) => theme.bgColor.main};
  border: 1px solid transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.bgColor.hover};
    border: ${({ theme }) => theme.border.nav_hover};
  }
`;

export const Image = styled.img`
  max-height: 15px;
  margin-right: 8px;
`;
