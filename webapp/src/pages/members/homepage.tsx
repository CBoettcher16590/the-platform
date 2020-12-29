import React from 'react';
import { Navbar, Nav, NavDropdown, Card, CardGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cat from '../../images/cat.jpg'
import Littlecat from '../../images/little.jpg'





 export default function memberHome (porps: {}) {
     


  

return <>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href = "/homepage" >The-Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
  <Nav.Link href="/freetoread">Free To Read</Nav.Link>
</Nav>    
  <Nav className="mr-auto">
  <Nav.Link href="/recentar">Most recent</Nav.Link>
</Nav>
  <Nav>
  <Nav.Link href="/profile"> My Account</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
<br/>
<br />
<section className="homeWelcome">
      <img src="https://images.unsplash.com/photo-1589782182965-c6512208e2b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"></img>
      <div className="welcomeText">
<h1>Welcome to "The Platform"</h1>
<p>
       Shout out to our members who keep our site going.
       Thanks for supporting our authors. 
        
       
</p>
</div>
</section>
<Card className="text-center">
  <Card.Body>
  <CardGroup>
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
</CardGroup>
<br/>
</Card.Body>
  <Card.Footer className="text-muted" />
</Card>

<br/>
<Card className="text-center">
  <Card.Body>
  <CardGroup>
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
</CardGroup>
<br/>
</Card.Body>
</Card>
<br/>

</>
 }