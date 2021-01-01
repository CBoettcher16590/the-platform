import React from 'react';
import { Navbar, Nav, Card, CardGroup, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Littlecat from '../../images/little.jpg'





 export default function my_articles (porps: {}) {
     


  

      return <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
      <Nav.Link href="/authorHome">The-Platform</Nav.Link>
      </Nav> 
    <Nav className="mr-auto">
      <Nav.Link href="#Reported articles">Write an Article</Nav.Link>
      </Nav>    
      <Nav className="mr-auto">
      <Nav.Link href="#Reported Reviews">My Organization</Nav.Link>
      </Nav>
      <Nav className="mr-auto">
      <Navbar.Brand href="/authorArticles">My Articles</Navbar.Brand>
      </Nav>
    <Nav>
      <Nav.Link href="/AUProfile"> My Account</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<br/>
<Card className="text-center">
  <Card.Body>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src={Littlecat} />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Littlecat}/>
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={Littlecat} />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>

  </Card>
</CardDeck>

<br/>
  </Card.Body>
  <Card.Footer className="text-muted" />
</Card>

<br/>
<Card className="text-center">
  <Card.Body>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src={Littlecat} />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={Littlecat} />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={Littlecat} />
    <Card.Body>
      <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>

  </Card>
  </CardDeck>
<br/>
  </Card.Body>
</Card>
<br/>

</>
 }