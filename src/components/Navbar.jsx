import React from 'react'
import { Navbar as RBNavbar, Container, Nav, Button } from 'react-bootstrap'

export default function Navbar() {
  return (
    <RBNavbar expand="lg" variant="dark" className="navbar-glass fixed-top">
      <Container>
        <RBNavbar.Brand href="#home" className="fw-bold gradient-text">
          My Portfolio
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="main-nav" />
        <RBNavbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#home" className="nav-link-neo">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-neo">About</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-neo">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-neo">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-neo">Contact</Nav.Link>

          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  )
}
