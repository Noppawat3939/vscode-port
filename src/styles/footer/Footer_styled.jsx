import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 40px;
  width: calc(100% - 40px);
  height: fit-content;
  background: ${({ theme }) => theme.bgColor.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.15);
  border-top: ${({ theme }) => theme.border.footer};
`;
