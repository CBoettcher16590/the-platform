import React from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button, Col, Form, Row } from 'react-bootstrap';

export default function OrgAuthors() {
    return <>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav>
  <Nav.Link href = "/orgAdminHome" >The-Platform</Nav.Link>
  </Nav>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">   
  <Nav>
      <Navbar.Brand href="/Orgauthors">Organization Authors</Navbar.Brand>
    </Nav>
    <Nav>
      <Nav.Link href="/orgAdminProfile"> My Account</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>
    </>
    }