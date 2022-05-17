import styled from "styled-components";

export const SidebarIconContainer = styled.a`
  padding: 5px 10px;
  display: flex;

  > svg {
    color: ${({ theme }) => theme.fontColor.body};
    opacity: 0.65;
    font-size: 24px;
    transition: 0.4s ease;
    margin-bottom: 5px;

    &:hover {
      opacity: 1;
    }
  }
`;
