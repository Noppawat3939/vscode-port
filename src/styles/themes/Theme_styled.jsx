import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  column-gap: 8px;
  letter-spacing: 1.5px;
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  font-size: 1.2em;
  color: ${({ theme }) => theme.fontColor.body};
  display: flex;
  column-gap: 6px;
  letter-spacing: 2px;
  margin-bottom: 10px;

  > span {
    color: ${({ theme }) => theme.fontColor.const};
  }

  p {
    color: ${({ theme }) => theme.fontColor.value};
  }
`;

export const Content = styled.div`
  color: ${({ theme }) => theme.fontColor.body};
  letter-spacing: 1.5px;
  margin-top: 20px;

  > h4 {
    font-size: 18px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-weight: 500;
    margin: 10px 0;

    > span:nth-child(1) {
      color: ${({ theme }) => theme.fontColor.const};
    }

    > span:nth-child(2) {
      color: ${({ theme }) => theme.fontColor.obj_value};
    }
  }

  h5 {
    font-size: 18px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin: 10px 20px;
    font-weight: 500;

    > span:nth-child(1) {
      color: ${({ theme }) => theme.fontColor.const};
    }

    > span:nth-child(2) {
      color: ${({ theme }) => theme.fontColor.var};
    }
  }
`;
