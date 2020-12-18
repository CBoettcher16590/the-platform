import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


 export default function mostRecentArcticles(){
    return(
        <div>
            
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
  <Nav.Link  href = "/memberHome" >The-Platform</Nav.Link>
      </Nav> 
 
      <Nav className="mr-auto">
      <Nav.Link href="/freetoread">Free To Read</Nav.Link>
      </Nav>
      <Nav className="mr-auto">
      <Navbar.Brand href="#">Most Recent</Navbar.Brand>
      </Nav>   
    <Nav>
      <Nav.Link href="/profile"> My Account</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>
            <h3>Free To Read Arcticles</h3>
        </div>
    )
 }
