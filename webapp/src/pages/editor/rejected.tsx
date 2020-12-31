import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Rejected (porps: {}) {

return<>

<Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                <Nav className="mr-auto">
                    <Nav.Link href="/editors">The Platform</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="/pendingArticles">Pending Articles</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Navbar.Brand href="/rejectedArticles">Rejected Articles</Navbar.Brand>
                </Nav>
                
                 </Nav>
              </Navbar>  
              <br/>
<h3> Rejected Articles</h3>
</>
}