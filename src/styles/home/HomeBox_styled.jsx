import styled from "styled-components";

export const Wrap = styled.div`
  background: ${({ theme }) => theme.bgColor.main_alt};
  max-width: 400px;
  height: fit-content;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 -2px 6px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;

  > svg {
    position: absolute;
    font-size: 24px;
    top: 0.1em;
    left: 0.1em;
  }
`;

export const IconCon = styled.div`
  background: #598def !important;
  transform: rotate(-30deg);
  width: 120px;
  height: 40px;
  position: absolute;
  top: -1em;
  left: -2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  padding: 25px 30px 15px;
  line-height: 1.5em;
  letter-spacing: 1.2px;
  font-size: 15px;

  > span {
    font-size: 18px;
    font-weight: 600;
  }
`;

export const Icon = styled.svg`
  font-size: 24px;
  position: absolute;
  top: 0.1em;
  left: 0.1em;
`;
