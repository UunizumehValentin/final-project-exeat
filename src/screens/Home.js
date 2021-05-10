import React from "react";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <marquee behavior="move" direction="right">
        <h1>STUDENT EXEAT APP</h1>
      </marquee>
      <img src="block.png" alt="image" />
    </Container>
  );
}

export default Home;
