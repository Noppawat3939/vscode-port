import styled from "styled-components";

export const Title = styled.h1`
  font-size: 14rem;
  letter-spacing: 5px;
  /* opacity: 0.65; */
  -webkit-text-stroke: 3px ${({ theme }) => theme.fontColor.body};
  color: transparent;
`;

export const HomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1em;

    > span {
      color: #598def !important;
      display: flex;
      align-items: center;

      > svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Subtitle = styled.h2`
  font-size: 3em;
  letter-spacing: 2px;
  font-weight: 500;
`;

export const Typing = styled.h4`
  font-size: 1.7em;
  font-weight: 400;
  letter-spacing: 1.5px;
`;
