import { disconnect } from 'process';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



 export default function Admin_profile(){

 
        return <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link href = "/adminHome" > The-Platform</Nav.Link>
              </Nav> 
            <Nav className="mr-auto">
              <Nav.Link href="#Reported articles">Reported-Articles</Nav.Link>
              </Nav>    
              <Nav className="mr-auto">
              <Nav.Link href="#Reported Reviews">Reported-Reviews</Nav.Link>
              </Nav>
              <Nav className="mr-auto">
              <Nav.Link href="#users">Users</Nav.Link>
              </Nav>
            <Nav>
              <Navbar.Brand href="/ADProfile"> My Account</Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
     </>
 }