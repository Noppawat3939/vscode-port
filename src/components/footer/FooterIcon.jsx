import React from "react";
import { FooterIconContainer } from "../../styles/footer/FooterIcon_styled";

function FooterIcon({ Icon, Title }) {
  return (
    <FooterIconContainer>
      <Icon />
      {Title && <p>{Title}</p>}
    </FooterIconContainer>
  );
}

export default FooterIcon;
