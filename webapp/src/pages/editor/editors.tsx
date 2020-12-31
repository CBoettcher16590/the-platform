import React from 'react';

import reported_articles from '../systemAdmin/reportedArticles'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';







 export default function Editor (porps: {}) {
     


  

      return <>
    

    <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/editors">The Platform</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav className="mr-auto">
                    <Nav.Link href="/pendingArticles">Pending Articles</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="/rejectedArticles">Rejected Articles</Nav.Link>
                </Nav>
                
                 </Nav>
              </Navbar>      

                
                





<h3>Featured Articles should appear here</h3>
        
</>
 }
