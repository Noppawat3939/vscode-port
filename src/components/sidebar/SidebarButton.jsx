import React from "react";
import { useAppContext } from "../../context/Context";
import {
  Image,
  SidebarButtonCon,
} from "../../styles/sidebar/SidebarButton_styled";

function SidebarButton({ img, to, title }) {
  const { setSidebarToggle } = useAppContext();
  return (
    <SidebarButtonCon to={to} onClick={() => setSidebarToggle(false)}>
      <Image src={img} />
      {title}
    </SidebarButtonCon>
  );
}

export default SidebarButton;
