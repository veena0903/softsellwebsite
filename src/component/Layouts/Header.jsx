import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import "../../styles/HeaderStyle.css";
import { Link } from "react-router";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="Softsell Logo" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                {" "}
                About{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                {" "}
                Services{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                {" "}
                Blog{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/Contact">
                {" "}
                Contact{" "}
              </Nav.Link>

              <Nav.Link as={Link} to="/">
                <div className="contact_now">
                  <span>enquire now</span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
