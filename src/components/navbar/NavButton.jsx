import React from "react";
import { Link, Image, Container } from "../../styles/navbar/NavButton_styled";

function NavButton({ to, title, img }) {
  return (
    <Container>
      <Link to={to}>
        <Image src={img} />
        {title}
      </Link>
    </Container>
  );
}

export default NavButton;
