import React from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button, Col, Form, Row } from 'react-bootstrap';

export default function OrgAuthors() {
    return <>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href = "thispage" >The-Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">   
    <Nav>
      <Nav.Link href="/OrgProfile"> My</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>
    </>
    }