import styled from "styled-components";

export const Container = styled.ul`
  padding: 6px 40px;

  > li {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.fontColor.const};

    > span {
      color: ${({ theme }) => theme.fontColor.body};
      margin-left: 8px;
    }
  }
`;

export const Button = styled.button`
  padding: 5px;
  color: ${({ theme }) => theme.fontColor.var};
  font-size: 18px;
  letter-spacing: 1px;
  transition: 0.3s ease-in-out;
  margin: 0 6px;

  > span {
    color: ${({ theme }) => theme.fontColor.body};

    &:hover {
      color: ${({ theme }) => theme.fontColor.const};
    }
  }
`;
