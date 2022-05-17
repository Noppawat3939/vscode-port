import React from "react";
import FooterIcon from "./FooterIcon";
import {
  VscAdd,
  VscDiffAdded,
  VscChevronDown,
  VscChevronUp,
  VscSplitHorizontal,
  VscTrash,
  VscClose,
} from "react-icons/vsc";
import { FooterRightContainer } from "../../styles/footer/FooterRight_styled";

function FooterRight() {
  return (
    <FooterRightContainer>
      <FooterIcon Icon={VscDiffAdded} Title="powershell" />
      <FooterIcon Icon={VscAdd} />
      <FooterIcon Icon={VscChevronDown} />
      <FooterIcon Icon={VscSplitHorizontal} />
      <FooterIcon Icon={VscTrash} />
      <FooterIcon Icon={VscChevronUp} />
      <FooterIcon Icon={VscClose} />
    </FooterRightContainer>
  );
}

export default FooterRight;
