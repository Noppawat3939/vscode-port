import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarButtonCon = styled(NavLink)`
  width: auto;
  padding: 10px 25px;
  font-size: 13px;
  letter-spacing: 1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  transition: 0.3s ease-in-out;
  color: ${({ theme }) => theme.fontColor.body};
  background: transparent;

  &:hover {
    background: ${({ theme }) => theme.bgColor.hover};
  }
`;

export const Image = styled.img`
  max-height: 15px;
  margin-right: 8px;
`;
