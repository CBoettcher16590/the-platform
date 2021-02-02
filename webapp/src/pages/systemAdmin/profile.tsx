import { disconnect } from 'process';
import React from 'react';
import cat from '../../images/cat.jpg'
import little from '../../images/little.jpg'
import { Card, CardGroup, Nav, Navbar } from 'react-bootstrap';
import './styling.css'

 export default function Admin_profile(){

 
        return <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href = "/" > The-Platform</Nav.Link>
          </Nav> 
            <Nav>
              <Navbar.Brand href="/ADProfile"> My Account</Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="adminCardBG">
        <Card className="adminInfoCard">
          <Card.Img variant="top" src= {cat} />
          <Card.Body className="adminInfo">
          <Card.Title><h2>Author Profile</h2></Card.Title>
            <br/>
            <br/>
          <Card.Title><h5>Bio</h5></Card.Title>
      
          <Card.Text>
              Q: What’s the best thing about Switzerland?
              A: I don’t know, but the flag is a big plus.
          </Card.Text>
          <Nav.Link href = "/EDupdateInfo" >Edit Profile</Nav.Link>
        </Card.Body>
        </Card>
      </div>
<br/>
<Card className="reviewArticles">
    <Card.Body>
      <Card.Title>Manage User Permissions</Card.Title>
        {/* Here we need to display all users with abliity to disable login */}
    </Card.Body>
  </Card>
<div className= "raw">
<Card className="text-center" style={{ width: '100rem' }}>
  <Card.Header><h3>Purchased Articles</h3></Card.Header>
  <Card.Body>
  <CardGroup>
  <Card>
    <Card.Img variant="top" src={little} />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={little}/>
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={little} />
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

<Nav.Link href= "/profilePurchased" >See All </Nav.Link>
  </Card.Body>
  <Card.Footer className="text-muted" />
</Card>

<br/>
<Card className="text-center"  style={{ width: '100rem' }}>
  <Card.Header><h3>My Favorite List</h3></Card.Header>
  <Card.Body>
  <CardGroup>
  <Card>
    <Card.Img variant="top" src={little} />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={little} />
    <Card.Body>
    <Card.Title><h4>Article title</h4></Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>

  </Card>
  <Card>
    <Card.Img variant="top" src={little} />
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
    <Nav.Link href= "/profileFavorite" >See All </Nav.Link>
  </Card.Body>
  <Card.Footer className="text-muted" />
</Card>
<br/>
</div>
     </>
 }