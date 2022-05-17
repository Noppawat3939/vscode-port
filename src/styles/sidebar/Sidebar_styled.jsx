import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const SidebarTab = styled.div`
  max-width: fit-content;
  position: fixed;
  top: 30px;
  padding: 5px 2px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.bgColor.main};
  z-index: 5;
  border: ${({ theme }) => theme.border.sidebar};
`;

export const SidebatTab_Top = styled.div`
  width: min-content;
  background: ${({ theme }) => theme.bgColor.main};

  > button {
    padding: 5px 10px;

    > svg {
      color: ${({ theme }) => theme.fontColor.body};
      font-size: 24px;
      transition: 0.4s ease;
      margin-bottom: 5px;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const SidebatTab_Bottom = styled.div`
  width: min-content;
  background: ${({ theme }) => theme.bgColor.main};
`;

export const SidebarExplore = styled.div`
  background: ${({ theme }) => theme.bgColor.main_alt};
  position: fixed;
  left: 50px;
  top: 30px;
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  border-right: ${({ theme }) => theme.border.sidebar};
  border-top: ${({ theme }) => theme.border.sidebar};
  z-index: 10;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.fontColor.body};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;

  :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: ${({ theme }) => theme.bgColor.main_alt};
  }

  :nth-child(2) {
    padding: 5px;
    background: ${({ theme }) => theme.bgColor.main};
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;

      > svg {
        font-size: 18px;
        padding: 2px;
        border-radius: 2px;

        &:hover {
          background: ${({ theme }) => theme.bgColor.hover};
        }
      }
    }
  }
`;
