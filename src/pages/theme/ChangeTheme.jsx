import React from "react";
import { Container, Button } from "../../styles/themes/ChangeTheme_styled";

function ChangeTheme({ onclick, title }) {
  return (
    <Container>
      <li>
        if{" "}
        <Button onClick={onclick}>
          {`(`}
          <span>clickHere</span>
          {`)`}
        </Button>
        return <span>{title} theme</span>;
      </li>
    </Container>
  );
}

export default ChangeTheme;
