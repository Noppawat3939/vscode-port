import styled from "styled-components";

export const FooterIconContainer = styled.div`
  color: ${({ theme }) => theme.fontColor.body};
  font-size: 11px;
  display: flex;
  align-items: center;
  margin-left: 4px;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;

  > svg {
    color: ${({ theme }) => theme.fontColor.body};
    font-size: 18px;
  }

  &:hover {
    background: ${({ theme }) => theme.bgColor.hover};
  }
`;
