import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 1.5em;
  letter-spacing: 2px;
  color: #ffbd35;

  > span:nth-child(1) {
    color: ${({ theme }) => theme.fontColor.const};
  }

  > span:nth-child(2) {
    color: ${({ theme }) => theme.fontColor.var};
  }

  > span:nth-child(3) {
    color: ${({ theme }) => theme.fontColor.body};
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  > li {
    margin-bottom: 10px;
  }
`;

export const Property = styled.h3`
  color: ${({ theme }) => theme.fontColor.property};
  margin: 6px 20px;
  letter-spacing: 2px;

  > span,
  a {
    color: ${({ theme }) => theme.fontColor.obj_value};
    font-weight: 400;
  }
`;
