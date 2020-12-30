import React from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function pending (porps: {}) {

return<>

<Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                <Nav className="mr-auto">
                    <Nav.Link href="/editors">The Platform</Nav.Link>
                </Nav>
                <Nav className="mr-auto">
                    <Navbar.Brand href="/pendingArticles">Pending Articles</Navbar.Brand>
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="/rejectedArticles">Rejected Articles</Nav.Link>
                </Nav>
                
                 </Nav>
              </Navbar>  
              <br/>
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