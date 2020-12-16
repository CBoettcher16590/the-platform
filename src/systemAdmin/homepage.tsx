import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { stringify } from 'querystring';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button } from 'react-bootstrap';
import reported_articles from '../systemAdmin/reportedArticles'
import 'bootstrap/dist/css/bootstrap.min.css';





 export default function adminHome (porps: {}) {
     


  

      return <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href = "thispage" >The-Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/reportedArticles">Reported-Articles</Nav.Link>
      </Nav>    
      <Nav className="mr-auto">
      <Nav.Link href="/reportedReviews">Reported-Reviews</Nav.Link>
      </Nav>
      <Nav className="mr-auto">
      <Nav.Link href="/users">Users</Nav.Link>
      </Nav>
    <Nav>
      <Nav.Link href="/ADProfile"> My Account</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>



<CardGroup>
  <Card>
    <Card.Img variant="top" src="img" />
    <Card.Body>
      <Card.Title>Article title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="img" />
    <Card.Body>
      <Card.Title>Article title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="img" />
    <Card.Body>
      <Card.Title>Article title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>

  </Card>
</CardGroup>
        
</>
 }