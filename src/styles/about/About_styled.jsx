import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  font-size: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-size: 1.2em;
  letter-spacing: 1.2px;
  line-height: 1.5em;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Link = styled.span`
  font-size: 1.2em;
  letter-spacing: 1.2px;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  > a {
    color: inherit;
  }
`;

export const Image = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
`;

export const Tag = styled.code`
  color: ${({ theme }) => theme.fontColor.symbol};
  font-weight: 400;
  font-size: 16px;
  display: flex;
  align-items: center;
  column-gap: 6px;

  > span {
    color: ${({ theme }) => theme.fontColor.tag};
  }

  > p {
    color: ${({ theme }) => theme.fontColor.attribute};

    > span {
      color: ${({ theme }) => theme.fontColor.value};
    }
  }
`;

export const ImageCon = styled.div`
  width: 320px;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s linear;
  }

  &:hover > img {
    transform: scale(1.2) rotate(-10deg);
  }
`;
