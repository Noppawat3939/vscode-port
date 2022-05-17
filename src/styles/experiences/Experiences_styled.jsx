import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  font-size: 2em;
  margin-bottom: 20px;
`;

export const Ul = styled.ul`
  border-bottom: 1px solid rgba(250, 250, 250, 0.15);
  margin-bottom: 10px;

  > li {
    margin-bottom: 20px;
  }
`;

export const Position = styled.h3`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 1.65em;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

export const Name = styled.h4`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 1.65em;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

export const Job = styled.h4`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 10px;

  > span {
    padding-left: 30px;
    letter-spacing: 1.5px;
    line-height: 1.5em;
  }
`;

export const Project = styled.span`
  display: flex;

  > code > a {
    color: ${({ theme }) => theme.fontColor.body};
    letter-spacing: 1.5px;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Comment = styled.i`
  color: ${({ theme }) => theme.fontColor.comment};
`;
