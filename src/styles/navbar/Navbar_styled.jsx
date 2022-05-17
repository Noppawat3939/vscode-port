import styled from "styled-components";

export const Nav = styled.nav`
  background: ${({ theme }) => theme.bgColor.main};
  position: sticky;
  top: 0;
  z-index: 5;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.25);
`;

export const NavTop = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px 0;
  border-top: ${({ theme }) => theme.border.nav};
  border-bottom: ${({ theme }) => theme.border.nav};
`;

export const NavBottom = styled.div`
  display: flex;
  margin-left: 50px;
  height: fit-content;
  overflow-x: scroll;
  padding: 0 0 10px;
  background: ${({ theme }) => theme.bgColor.main_alt};
  position: relative;

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 6px;
    left: 0;
    bottom: 0;
    background: ${({ theme }) => theme.bgColor.main};
    border-top: ${({ theme }) => theme.border.nav};
  }
`;

export const NavIconCon = styled.div`
  position: absolute;
  left: 1em;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.fontColor.body};
  letter-spacing: 1.5px;
  font-size: 14px;
`;
