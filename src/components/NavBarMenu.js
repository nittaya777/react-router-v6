import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle area-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse>
          <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li"> 
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarMenu;
