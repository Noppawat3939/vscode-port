import React from "react";
import { Wrap, IconCon, Box } from "../../styles/home/HomeBox_styled";

function HomeBox({ text, title, Icon, color }) {
  return (
    <Wrap>
      {!color && <IconCon />}
      <Icon style={{ color: color ? "#598def" : "inherit" }} />
      <Box>
        <span>{title}</span>
        <br />
        {text}
      </Box>
    </Wrap>
  );
}

export default HomeBox;
