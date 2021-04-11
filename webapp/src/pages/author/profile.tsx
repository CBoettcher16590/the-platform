import React from 'react';
import { Navbar, Nav, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  FavoriteArticles  from '../../components/article/favoriteArticle';
import './style.css';
import { useHistory } from 'react-router';


export default function AuthorProfile() {
//did not add logout to the author profile, as its a class, should we make this a regular function? 
const history = useHistory();

function onClickLogout(){
  window.localStorage.clear()
  history.push('/');
  alert("Logged Out")
}

  return (
    <div>
    <Navbar className="authorNav" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/"> The-Platform</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/newArticle">Submit An Article</Nav.Link>
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="/newSeries">Create New Series</Nav.Link>
        </Nav>
        <Nav>
          <Navbar.Brand> My Account</Navbar.Brand>
        </Nav>
        <Nav>
          <Button onClick={onClickLogout}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className="authorCardBG">
        <Card className="authorInfoCard">
          <Card.Img variant="top" src="#" />
          <Card.Body className="authorInfo">
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
    <br />

    

    <br/>
{/* ================= FAVORITED ARTICLES ================= */}

<FavoriteArticles></FavoriteArticles>

    </div>
    )
}
 