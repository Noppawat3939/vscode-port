import styled from "styled-components";

export const FooterLeftContainer = styled.ul`
  display: flex;

  > li {
    font-size: 12px;
    margin: 0 10px;
    color: ${({ theme }) => theme.fontColor.body};
    text-transform: uppercase;
  }
`;
