import React from 'react';

import reported_articles from '../systemAdmin/reportedArticles'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';







 export default function Editor (porps: {}) {
     


  

      return <>
    

    <h1>Editors Page</h1>
      

                
                





<Card style={{ width: '70%' }}>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>Pending articles</Card.Title>
    <Card.Text>
      Do not forget about these pending articles.
    </Card.Text>
    <Button variant="primary">Review Articles</Button>
  </Card.Body>
</Card>

<Card style={{ width: '70%' }}>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>reported Articles</Card.Title>
    <Card.Text>
      Do not forget about these pending articles.
    </Card.Text>
    <Button variant="primary">Review Articles</Button>
  </Card.Body>
</Card>
        
</>
 }
