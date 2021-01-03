import React from 'react';

import reported_articles from '../systemAdmin/reportedArticles'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cat from '../images/cat.jpg';
import little from '../images/little.jpg';

    
    
     export default function EditorProfile(){
    return<>
   <div>
   <Card.Body>
        <Card.Title><h2>Silent Meow</h2></Card.Title>
        <br/>
        <br/>
        <Card.Title><h5>Heratwarming story of finding a kitten</h5></Card.Title>
    
        <Card.Text>
       Here is the article contents that the edotor can approve or deny.
      
        </Card.Text>
        
      </Card.Body>
  
    <br/>
   
       










     <Card style={{ width: '70%' }}>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>Allow</Card.Title>
    <Card.Text>
      Click to publish
    </Card.Text>
    <Button variant="primary">Review Articles</Button>
  </Card.Body>
</Card>


<Card style={{ width: '70%' }}>
  <Card.Img variant="top" src="" />
  <Card.Body>
    <Card.Title>Rejected</Card.Title>
    <Card.Text>
      Click to reject and notify author why
    </Card.Text>
    <Button variant="primary">Review Articles</Button>
  </Card.Body>
</Card>
    </div>
                
                






        
</>
  }