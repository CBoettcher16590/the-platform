import React from 'react';
import { Navbar, Nav, Card, CardGroup, CardDeck, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Littlecat from '../images/little.jpg'
import cat from '../images/cat.jpg'
import { render } from '@testing-library/react';








export default class author_profile extends React.Component {

  state = {
    likes: 0
  };
  addLike = () => {
    let newCount = this.state.likes + 1;
    this.setState({
      likes: newCount
    });
  };


render(){
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/authorHome"> The-Platform</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="#Reported articles">Write an Article</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="#Reported Reviews">My Organization</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="#Reported Reviews">My Articles</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Brand> My Account</Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <br />
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={cat} />
      <br />

      <Card.Body>
        <Card.Title><h2>Donald Trump</h2></Card.Title>
        <br />
        <br />
        <Card.Title><h5>Bio</h5></Card.Title>

        <Card.Text>
          Q: What’s the best thing about Switzerland?
          A: I don’t know, but the flag is a big plus.
        </Card.Text>
        <Nav.Link href="#">Edite Profile</Nav.Link>
      </Card.Body>
    </Card>
    <br />
    <Button onClick={this.addLike}>Likes: {this.state.likes} </Button>
    <br/>
    <br/>
        <Card.Header><h3>Purchased Articles</h3></Card.Header>
    <Card.Body>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={Littlecat} />
          <Card.Body>
            <Card.Title><h4>Article title</h4></Card.Title>
            <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
              additional content.This content is a little bit longer.
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
              additional content.This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>

        </Card>
      </CardDeck>

      <br />
    </Card.Body>
    <Nav.Link href="/profilePurchased">See All </Nav.Link>
    <Card.Footer className="text-muted" />
  <br /><Card className="text-center">
      <Card.Header><h3>My Favorite List</h3></Card.Header>

      <Card.Body>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src={Littlecat} />
            <Card.Body>
              <Card.Title><h4>Article title</h4></Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content.This content is a little bit longer.
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
                additional content.This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>

          </Card>
        </CardDeck>
        <br />
        <Nav.Link href="/profileFavorite">See All </Nav.Link>
      </Card.Body>
    </Card>
    <br />
    </div>
    )
}
 }