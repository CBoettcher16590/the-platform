import React from 'react';

import { Navbar, Nav, NavDropdown, Card, CardGroup, Button } from 'react-bootstrap';
import reported_articles from '../systemAdmin/reportedArticles'
import 'bootstrap/dist/css/bootstrap.min.css';





 export default function Editors (porps: {}) {
     


  

      return <>

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
