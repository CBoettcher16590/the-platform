import React from 'react';
import { Navbar, Nav, Card, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Littlecat from '../../images/little.jpg'


export default function authorHome(porps: {}) {





  return <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Navbar.Brand href="/homepage" >The-Platform</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mr-auto">
     <Nav.Link href="/newArticle">Write an Article</Nav.Link>
</Nav>
<Nav className="mr-auto">
     <Nav.Link href="/authorArticles">My Articles</Nav.Link>
</Nav>
<Nav>
     <Nav.Link href="/AUProfile"> My Account</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
<br />
<section className="homeWelcome">
      <img src="https://images.unsplash.com/photo-1589782182965-c6512208e2b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"></img>
      <div className="welcomeText">
<h1>Welcome to "The Platform"</h1>
<p>
       Thanks from all The Platform staff for all the hard work on your writtings. We are all always excited and encouraged by what 
       you all publish. here is your personal home page that will show the work that you have got published. 
       
</p>
</div>
</section>
<Card className="text-center">
    <Card.Body>
    <CardDeck>
    <Card>
    <Card.Img variant="top" src={Littlecat} />
    <Card.Body>
<Card.Title><h4>Adventures of Christmas</h4></Card.Title>
              <Card.Text>
                How was your holiday season while we are told Covid 19, a horrible virus 
                is turning how we celebrate this holiday season in new ways.
</Card.Text>
</Card.Body>
</Card>
<Card>
<Card.Img variant="top" src={Littlecat} />
<Card.Body>
              <Card.Title><h4>Did you know your body is for Science</h4></Card.Title>
              <Card.Text>
                How for many years our bodys have been used for science stuff and you may not even realize it.
        {' '}
</Card.Text>
</Card.Body>

</Card>
<Card>
<Card.Img variant="top" src={Littlecat} />
<Card.Body>
             <Card.Title><h4>Not enough hours in a day</h4></Card.Title>
              <Card.Text>
                The way that a adult college student have learned the 
                hard way to balance the hours in a day to eat, sleep, study 
               and still have time for the important things like family time 
                
</Card.Text>
</Card.Body>

</Card>
</CardDeck>

    <br />
</Card.Body>
<Card.Footer className="text-muted" />
</Card>

    <br />
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
  <br />
</Card.Body>
</Card>
  <br />

  </>
}