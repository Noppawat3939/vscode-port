import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { RiMoreFill } from "react-icons/ri";
import {
  VscSearch,
  VscSourceControl,
  VscDebugAltSmall,
  VscExtensions,
  VscAccount,
  VscChevronDown,
  VscSettingsGear,
  VscNewFile,
  VscNewFolder,
  VscRefresh,
  VscCollapseAll,
} from "react-icons/vsc";
import vscode from "../../image/vscode.png";
import html from "../../image/html.svg";
import css from "../../image/css3.svg";
import js from "../../image/js.webp";
import react from "../../image/react.png";
import {
  SidebarContainer,
  SidebarExplore,
  SidebarTab,
  SidebatTab_Bottom,
  SidebatTab_Top,
  Span,
} from "../../styles/sidebar/Sidebar_styled";
import SidebarIcon from "./SidebarIcon";
import { useAppContext } from "../../context/Context";
import SidebarButton from "./SidebarButton";

function Sidebar() {
  const { sidebarToggle, setSidebarToggle } = useAppContext();

  return (
    <SidebarContainer>
      <SidebarTab>
        <SidebatTab_Top>
          <button onClick={() => setSidebarToggle(!sidebarToggle)}>
            <FaRegCopy />
          </button>
          <SidebarIcon Icon={VscSearch} />
          <SidebarIcon Icon={VscSourceControl} />
          <SidebarIcon Icon={VscDebugAltSmall} />
          <SidebarIcon Icon={VscExtensions} />
        </SidebatTab_Top>
        <SidebatTab_Bottom>
          <SidebarIcon
            Icon={VscAccount}
            href="https://github.com/Noppawat3939?tab=repositories"
          />
          <SidebarIcon Icon={VscSettingsGear} />
        </SidebatTab_Bottom>
      </SidebarTab>
      {sidebarToggle && (
        <SidebarExplore>
          <Span>
            explore <RiMoreFill />
          </Span>
          <Span>
            <div>
              <VscChevronDown />
              vscode studio
            </div>
            <div>
              <VscNewFile />
              <VscNewFolder />
              <VscRefresh />
              <VscCollapseAll />
            </div>
          </Span>
          <SidebarButton to="/" title="Welcome" img={vscode} />
          <SidebarButton to="/about" title="About.html" img={html} />
          <SidebarButton to="/experiences" title="Experiences.css" img={css} />
          <SidebarButton to="/projects" title="Projects.js" img={js} />
          <SidebarButton to="/themes" title="Theme.jsx" img={react} />
        </SidebarExplore>
      )}
    </SidebarContainer>
  );
}

export default Sidebar;
