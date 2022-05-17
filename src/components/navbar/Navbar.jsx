import React from "react";
import NavIcon from "./NavIcon";
import { BsFillRecordFill } from "react-icons/bs";
import {
  Nav,
  Text,
  NavIconCon,
  NavTop,
  NavBottom,
} from "../../styles/navbar/Navbar_styled";
import vscode from "../../image/vscode.png";
import html from "../../image/html.svg";
import css from "../../image/css3.svg";
import js from "../../image/js.webp";
import react from "../../image/react.png";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

function Navbar() {
  return (
    <Nav>
      <NavTop>
        <NavIconCon>
          <NavIcon Icon={BsFillRecordFill} color="#FD5D5D" />
          <NavIcon Icon={BsFillRecordFill} color="#FFD93D" />
          <NavIcon Icon={BsFillRecordFill} color="#6BCB77" />
        </NavIconCon>
        <Text>Vscode Portfolio</Text>
      </NavTop>
      <NavBottom>
        <NavButton to="/" title="Welcome" img={vscode} />
        <NavButton to="/about" title="About.html" img={html} />
        <NavButton to="/experiences" title="Experiences.css" img={css} />
        <NavButton to="/projects" title="Projects.js" img={js} />
        <NavButton to="/themes" title="Themes.js" img={react} />
      </NavBottom>
    </Nav>
  );
}

export default Navbar;
