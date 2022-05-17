import React from "react";
import { FooterContainer } from "../../styles/footer/Footer_styled";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

function Footer() {
  return (
    <FooterContainer>
      <FooterLeft />
      <FooterRight />
    </FooterContainer>
  );
}

export default Footer;
