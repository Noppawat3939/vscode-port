import React from "react";
import { SidebarIconContainer } from "../../styles/sidebar/SidebarIcon_styled";

function SidebarIcon({ Icon, href }) {
  return (
    <SidebarIconContainer href={href ? href : null} target="_blank">
      <Icon />
    </SidebarIconContainer>
  );
}

export default SidebarIcon;
