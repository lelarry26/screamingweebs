import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg">
      <Container className="headercss">
        <Navbar.Brand href="#home">
          <img
            src="https://static.wikia.nocookie.net/filthy-frank/images/7/76/Weeaboo_Jones.png"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </Navbar.Brand>

        <Nav className="me-auto">
          <div className="centered-text">
            <Nav.Link href="#upcominganime">SCREAMING WEEB</Nav.Link>
            <Nav.Link href="#upcominganime">See Upcoming Anime</Nav.Link>
            <Nav.Link href="#upcomingmanga">See Upcoming Manga</Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;
